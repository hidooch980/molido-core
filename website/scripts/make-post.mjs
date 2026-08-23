/**
 * Writes the day's ready-to-publish text to docs/TODAY.md.
 *
 * The supervisor should never have to open a source file to find out what to
 * post. Everything for the day lands in one place, in every language, in the
 * order it gets used.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE = "https://hidooch980.github.io/molido-core/";

const { puzzleFor, kindFor } = await import("../src/content/puzzles.ts");
const { currentSignal, signals } = await import("../src/content/signals.ts");

const date = process.argv[2] ?? new Date().toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  throw new Error(`Date must be YYYY-MM-DD, got "${date}"`);
}

const puzzle = puzzleFor(date);
const signal = currentSignal(date);

const HOOK = {
  en: {
    common: "Four stations. One value in all four. Can you find it?",
    checksum: "One value is missing. The checksum knows which.",
    parity: "One cell was corrupted. One row and one column disagree.",
    period: "The carrier repeats. How long is the repeat?",
  },
  fa: {
    common: "چهار ایستگاه. یک مقدار در هر چهار. پیدایش می‌کنی؟",
    checksum: "یک مقدار گم شده. جمع کنترلی می‌داند کدام.",
    parity: "یک خانه خراب شده. یک سطر و یک ستون ناسازگارند.",
    period: "حامل تکرار می‌شود. طول تکرار چقدر است؟",
  },
};

const TAGS = { en: "#Shorts #puzzle #dailypuzzle", fa: "#Shorts #معما" };

// How much written material is left. Running dry is the one failure the
// pipeline cannot fix by itself.
const remaining = signals.filter((s) => s.date > date).length;

function section(locale) {
  const hook = HOOK[locale][puzzle.kind];
  const line = signal ? signal.text[locale] : "";
  return `### ${locale === "fa" ? "فارسی" : "English"}

**YouTube title**

\`\`\`
${hook}
\`\`\`

**Description / Telegram post**

\`\`\`
${line}

${hook}

${SITE}

${TAGS[locale]}
\`\`\`
`;
}

const body = `# Today — ${date}

Generated automatically. Do not edit; it is overwritten each day.

Puzzle: **${kindFor(date)}** · Signal dated: **${signal?.date ?? "none"}**
Video: \`out/short-${date}-en.mp4\` and \`out/short-${date}-fa.mp4\`
(attached to the run in the Actions tab)

${remaining <= 3 ? `> **Signals run out in ${remaining} day(s).**\n> After that the site keeps showing the last one written. Add entries to\n> \`website/src/content/signals.ts\` — see docs/DAILY.md.\n` : `Signals written ahead: **${remaining} day(s)**.`}

${section("fa")}
${section("en")}
`;

const out = resolve(HERE, "../../docs/TODAY.md");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, body);
console.log(`docs/TODAY.md — ${kindFor(date)} · ${remaining} day(s) of signals left`);
