/**
 * Every puzzle must have exactly one answer, every day, for every kind.
 *
 * A puzzle with two valid answers tells a correct solver they are wrong,
 * and one with none is unsolvable. Both are worse than shipping no puzzle,
 * so this runs in CI.
 */
import { shareText } from "../src/content/share";
import { currentSignal, signals } from "../src/content/signals";
import {
  puzzleFor,
  isCorrect,
  answerRange,
  kindFor,
  KINDS,
  MODULUS,
  SECTION_LENGTH,
  type PuzzleKind,
} from "../src/content/puzzles";

const failures: string[] = [];
const seen: Record<string, number> = {};

function check(condition: boolean, message: string): void {
  if (!condition) failures.push(message);
}

const days: string[] = ["2028-02-29"];
for (let i = 0; i < 366; i++) {
  days.push(
    new Date(Date.UTC(2026, 7, 23) + i * 86400000).toISOString().slice(0, 10),
  );
}

for (const day of days) {
  const puzzle = puzzleFor(day);
  const kind: PuzzleKind = puzzle.kind;
  seen[kind] = (seen[kind] ?? 0) + 1;

  check(kind === kindFor(day), `${day}: kind disagrees with the weekly schedule`);
  check(
    JSON.stringify(puzzle) === JSON.stringify(puzzleFor(day)),
    `${day}: not deterministic`,
  );

  // Exactly one answer in range, and nothing valid outside it.
  const { min, max } = answerRange(puzzle);
  let valid = 0;
  for (let guess = min; guess <= max; guess++) {
    if (isCorrect(puzzle, guess)) valid++;
  }
  check(valid === 1, `${day} (${kind}): ${valid} valid answers, expected 1`);

  if (puzzle.kind === "checksum") {
    check(
      puzzle.values.length === SECTION_LENGTH - 1,
      `${day}: incomplete section is the wrong length`,
    );
    for (const s of puzzle.solved) {
      const sum = s.values.reduce((a, v) => (a + v) % MODULUS, 0);
      check(sum === s.checksum, `${day}: a teaching section does not resolve`);
    }
  }

  if (puzzle.kind === "parity") {
    // The corrupted cell must be the unique intersection of the one row and
    // the one column whose parity disagrees.
    const size = puzzle.grid.length;
    const badRows: number[] = [];
    const badCols: number[] = [];
    for (let r = 0; r < size; r++) {
      const p = puzzle.grid[r].reduce((a, v) => (a + v) % MODULUS, 0) % 2;
      if (p !== puzzle.rowParity[r]) badRows.push(r);
    }
    for (let c = 0; c < size; c++) {
      const p =
        puzzle.grid.reduce((a, row) => (a + row[c]) % MODULUS, 0) % 2;
      if (p !== puzzle.colParity[c]) badCols.push(c);
    }
    check(badRows.length === 1, `${day}: ${badRows.length} rows disagree, expected 1`);
    check(badCols.length === 1, `${day}: ${badCols.length} columns disagree, expected 1`);
    if (badRows.length === 1 && badCols.length === 1) {
      check(
        badRows[0] * size + badCols[0] + 1 === puzzle.answer,
        `${day}: the disagreeing cell is not the stated answer`,
      );
    }
  }

  if (puzzle.kind === "period") {
    // No shorter period may also fit, or the answer is ambiguous.
    for (let p = 1; p < puzzle.answer; p++) {
      const fits = puzzle.values.every((v, i) => v === puzzle.values[i % p]);
      check(!fits, `${day}: period ${p} also fits, answer ${puzzle.answer} is ambiguous`);
    }
    check(
      puzzle.values.every((v, i) => v === puzzle.values[i % puzzle.answer]),
      `${day}: the stated period does not actually fit`,
    );
    check(
      puzzle.values.length % puzzle.answer === 0,
      `${day}: sequence stops mid-cycle, which hints at a longer period`,
    );
  }
}

// The shared result must never carry the answer. The date and the attempt
// count are public, so the real invariant is stricter and simpler: the text
// contains no number beyond those two.
for (const day of days) {
  const puzzle = puzzleFor(day);
  const allowed = new Set(day.split("-").map(Number));

  for (let attempts = 1; attempts <= 12; attempts++) {
    const text = shareText(
      { date: day, kind: puzzle.kind, attempts, solved: true },
      { title: "MOLIDO", attempts: "Attempts" },
      "https://example.test/",
    );
    const extra = (text.match(/\d+/g) ?? [])
      .map(Number)
      .filter((n) => !allowed.has(n) && n !== attempts);

    check(
      extra.length === 0,
      `${day}: share text carries unexpected numbers [${extra}] - "${text.replace(/\n/g, " | ")}"`,
    );
  }
}

// Consecutive days must differ, or the puzzle is the same every morning.
for (let i = 1; i < days.length; i++) {
  check(
    JSON.stringify(puzzleFor(days[i])) !== JSON.stringify(puzzleFor(days[i - 1])),
    `${days[i]}: identical to the previous day`,
  );
}

// Every kind must actually appear over a year.
for (const kind of KINDS) {
  check(
    (seen[kind] ?? 0) > 0,
    `kind "${kind}" never appeared across ${days.length} days`,
  );
}

// Daily signals: a queued entry must stay hidden until its own day, or
// writing a week ahead publishes the whole week at once.
{
  const LOCALES = ["en", "fa", "ar", "ur", "hi", "tr", "az", "zh"] as const;
  const dates = new Set<string>();

  for (const signal of signals) {
    check(!dates.has(signal.date), `signal ${signal.date}: duplicate date`);
    dates.add(signal.date);
    check(
      /^\d{4}-\d{2}-\d{2}$/.test(signal.date),
      `signal ${signal.date}: date is not YYYY-MM-DD`,
    );
    for (const locale of LOCALES) {
      check(
        signal.text[locale].trim().length > 0,
        `signal ${signal.date}: ${locale} is empty`,
      );
    }
  }

  const sorted = [...signals].map((s) => s.date).sort();
  for (const day of sorted) {
    const shown = currentSignal(day);
    check(shown !== undefined, `signal ${day}: nothing shown`);
    if (!shown) continue;
    check(shown.date <= day, `signal ${day}: leaked a future entry ${shown.date}`);
    const newest = signals
      .filter((s) => s.date <= day)
      .reduce((a, b) => (b.date > a.date ? b : a));
    check(
      shown.date === newest.date,
      `signal ${day}: showed ${shown.date}, newest available is ${newest.date}`,
    );
  }

  // The day before the earliest entry must not show anything.
  const earliest = sorted[0];
  const before = new Date(`${earliest}T00:00:00Z`);
  before.setUTCDate(before.getUTCDate() - 1);
  check(
    currentSignal(before.toISOString().slice(0, 10)) === undefined,
    `signal: an entry showed before the earliest date ${earliest}`,
  );
}

if (failures.length > 0) {
  console.error(`puzzles: ${failures.length} failure(s)`);
  for (const f of failures.slice(0, 20)) console.error("  " + f);
  process.exit(1);
}

const spread = KINDS.map((k) => `${k}=${seen[k] ?? 0}`).join(" ");
console.log(
  `puzzles: ${days.length} days checked, one solution each — ${spread}`,
);
console.log(`signals: ${signals.length} queued, none published early`);
