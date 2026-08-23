/**
 * Renders the day's puzzle as a vertical YouTube Short.
 *
 * Frames are driven by an index rather than the wall clock, so the same day
 * always produces the same video and a slow machine does not drop frames.
 *
 * Requires Playwright and ffmpeg, neither of which is a project dependency -
 * the site does not need them and CI should not install them:
 *
 *     npm i -D playwright
 *     npx playwright install chromium
 *
 * Usage:  node scripts/make-short.mjs [YYYY-MM-DD] [locale]
 */
import { spawn } from "node:child_process";
import { readFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const FPS = 25;
const SECONDS = 20;
const TOTAL = FPS * SECONDS;
const SITE = "hidooch980.github.io/molido-core";

const COPY = {
  en: {
    kickers: {
      common: "FOUR STATIONS", checksum: "ONE SECTION SHORT",
      parity: "ONE CELL CORRUPTED", period: "THE CARRIER REPEATS",
    },
    questions: {
      common: "Which value appears in all four?",
      checksum: "Which value closes the checksum?",
      parity: "Where do the bad row and column cross?",
      period: "How long is the repeat?",
    },
    cta: "Today's fragment",
  },
  fa: {
    kickers: {
      common: "چهار ایستگاه", checksum: "یک بخش ناقص",
      parity: "یک خانه خراب", period: "حامل تکرار می‌شود",
    },
    questions: {
      common: "کدام مقدار در هر چهار بلوک هست؟",
      checksum: "کدام مقدار جمع کنترلی را می‌بندد؟",
      parity: "سطر و ستون ناسازگار کجا تلاقی می‌کنند؟",
      period: "طول تکرار چقدر است؟",
    },
    cta: "قطعه‌ی امروز",
  },
};

function blocksHtml(puzzle) {
  const cells = (values) =>
    `<div class="cells">${values
      .map((v) => `<span class="c">${v}</span>`)
      .join("")}</div>`;

  switch (puzzle.kind) {
    case "common":
      return puzzle.blocks
        .map(
          (b, i) =>
            `<div class="blk"><div class="stn">${String(i + 1).padStart(2, "0")}</div>${cells(b)}</div>`,
        )
        .join("");
    case "checksum": {
      const withGap = [...puzzle.values];
      withGap.splice(puzzle.gapIndex, 0, "?");
      return `<div class="blk"><div class="stn">CHECKSUM ${puzzle.checksum}</div>${cells(withGap)}</div>`;
    }
    case "parity":
      return puzzle.grid
        .map(
          (row, r) =>
            `<div class="blk"><div class="stn">ROW ${puzzle.rowParity[r]}</div>${cells(row)}</div>`,
        )
        .join("");
    case "period":
      return `<div class="blk">${cells(puzzle.values.slice(0, 24))}</div>`;
  }
}

const [, , dateArg, localeArg = "en"] = process.argv;

const { puzzleFor } = await import("../src/content/puzzles.ts").catch(() => {
  throw new Error(
    "Could not load puzzles.ts — run this through tsx:  npx tsx scripts/make-short.mjs",
  );
});

const date =
  dateArg ?? new Date().toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  throw new Error(`Date must be YYYY-MM-DD, got "${date}"`);
}
const copy = COPY[localeArg];
if (!copy) throw new Error(`No copy for locale "${localeArg}"`);

const puzzle = puzzleFor(date);

const html = readFileSync(resolve(HERE, "short.template.html"), "utf8")
  .replace("__FPS__", String(FPS))
  .replace("__TOTAL__", String(TOTAL))
  .replace("__KICKER__", copy.kickers[puzzle.kind])
  .replace("__QUESTION__", copy.questions[puzzle.kind])
  .replace("__BLOCKS__", blocksHtml(puzzle))
  .replace("__CTA__", copy.cta)
  .replace("__URL__", SITE);

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  throw new Error(
    "Playwright is not installed. Run:  npm i -D playwright && npx playwright install chromium",
  );
}

const outDir = resolve(HERE, "../../out");
mkdirSync(outDir, { recursive: true });
const outFile = `${outDir}/short-${date}-${localeArg}.mp4`;

const ffmpegPath = process.env.FFMPEG ?? "ffmpeg";
const ff = spawn(
  ffmpegPath,
  [
    "-y", "-f", "image2pipe", "-framerate", String(FPS), "-i", "-",
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "medium", "-crf", "20",
    "-movflags", "+faststart", outFile,
  ],
  { stdio: ["pipe", "ignore", "pipe"] },
);
let ffErr = "";
ff.stderr.on("data", (d) => (ffErr += d.toString()));

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
});
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
await page.setContent(html, { waitUntil: "load" });

for (let i = 0; i < TOTAL; i++) {
  await page.evaluate((n) => window.renderFrame(n), i);
  const buf = await page.screenshot({ type: "png" });
  if (!ff.stdin.write(buf)) {
    await new Promise((r) => ff.stdin.once("drain", r));
  }
  if (i % 50 === 0) process.stdout.write(`\r  frame ${i}/${TOTAL}`);
}
ff.stdin.end();
await browser.close();

const code = await new Promise((r) => ff.on("close", r));
if (code !== 0) {
  throw new Error(`ffmpeg exited ${code}\n${ffErr.split("\n").slice(-12).join("\n")}`);
}
process.stdout.write(`\r  ${TOTAL} frames                    \n`);
console.log(`${puzzle.kind} · ${date} · ${localeArg}\n${outFile}`);
