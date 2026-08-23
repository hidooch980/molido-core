/**
 * Posts the day's Short and caption to Telegram.
 *
 * The token comes from the environment and is never written to a file, a log
 * line, or an error message. The repository is public; a leaked bot token
 * lets anyone post as the channel.
 *
 * Set up:
 *   1. Create a bot with @BotFather, copy the token.
 *   2. Add the bot to the channel as an administrator.
 *   3. In the repo: Settings -> Secrets and variables -> Actions
 *        TELEGRAM_BOT_TOKEN   the token from BotFather
 *        TELEGRAM_CHAT_ID     e.g. @Molidoo
 *
 * Usage:  npx tsx scripts/post-telegram.mjs [YYYY-MM-DD] [locale]
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE = "https://hidooch980.github.io/molido-core/";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
if (!token || !chatId) {
  throw new Error(
    "TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must be set. See the header of this file.",
  );
}

const date = process.argv[2] ?? new Date().toISOString().slice(0, 10);
const locale = process.argv[3] ?? "fa";

const { puzzleFor } = await import("../src/content/puzzles.ts");
const { currentSignal } = await import("../src/content/signals.ts");

const HOOK = {
  fa: {
    common: "چهار ایستگاه. یک مقدار در هر چهار. پیدایش می‌کنی؟",
    checksum: "یک مقدار گم شده. جمع کنترلی می‌داند کدام.",
    parity: "یک خانه خراب شده. یک سطر و یک ستون ناسازگارند.",
    period: "حامل تکرار می‌شود. طول تکرار چقدر است؟",
  },
  en: {
    common: "Four stations. One value in all four. Can you find it?",
    checksum: "One value is missing. The checksum knows which.",
    parity: "One cell was corrupted. One row and one column disagree.",
    period: "The carrier repeats. How long is the repeat?",
  },
};

const puzzle = puzzleFor(date);
const signal = currentSignal(date);
const caption = [
  signal ? signal.text[locale] : "",
  "",
  HOOK[locale][puzzle.kind],
  "",
  SITE,
].join("\n");

const video = resolve(HERE, `../../out/short-${date}-${locale}.mp4`);

/** Never let the token reach a message that might be printed. */
function scrub(text) {
  return String(text).replaceAll(token, "***");
}

async function call(method, body) {
  const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    body,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.ok) {
    throw new Error(
      scrub(`Telegram ${method} failed (${res.status}): ${json.description ?? "no detail"}`),
    );
  }
  return json;
}

if (existsSync(video)) {
  const form = new FormData();
  form.append("chat_id", chatId);
  form.append("caption", caption);
  form.append("supports_streaming", "true");
  form.append(
    "video",
    new Blob([readFileSync(video)], { type: "video/mp4" }),
    `molido-${date}.mp4`,
  );
  await call("sendVideo", form);
  console.log(`Telegram: posted video for ${date} (${locale})`);
} else {
  // Still publish the day rather than skipping it because a render failed.
  const form = new FormData();
  form.append("chat_id", chatId);
  form.append("text", caption);
  await call("sendMessage", form);
  console.log(`Telegram: no video at ${video}, posted text only`);
}
