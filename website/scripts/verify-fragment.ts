/**
 * The fragment puzzle has to have exactly one answer, every day, forever.
 *
 * A puzzle with two valid answers is worse than no puzzle: a reader who
 * solves it correctly gets told they are wrong. This runs in CI so a change
 * to the checksum rule cannot ship that quietly.
 */
import {
  fragmentFor,
  isCorrect,
  MODULUS,
  SECTION_LENGTH,
} from "../src/content/fragment";

const failures: string[] = [];

function check(condition: boolean, message: string): void {
  if (!condition) failures.push(message);
}

// A year of consecutive days, plus a leap day.
const days: string[] = ["2028-02-29"];
for (let i = 0; i < 366; i++) {
  const d = new Date(Date.UTC(2026, 7, 23) + i * 86400000);
  days.push(d.toISOString().slice(0, 10));
}

for (const day of days) {
  const fragment = fragmentFor(day);

  check(
    JSON.stringify(fragment) === JSON.stringify(fragmentFor(day)),
    `${day}: not deterministic`,
  );
  check(
    fragment.incomplete.values.length === SECTION_LENGTH - 1,
    `${day}: incomplete section is the wrong length`,
  );
  check(isCorrect(fragment, fragment.answer), `${day}: answer does not verify`);
  check(
    fragment.answer >= 0 && fragment.answer < MODULUS,
    `${day}: answer outside 0..${MODULUS - 1}`,
  );

  for (const section of fragment.solved) {
    const sum = section.values.reduce((a, v) => (a + v) % MODULUS, 0);
    check(sum === section.checksum, `${day}: a solved section does not resolve`);
  }

  let valid = 0;
  for (let guess = 0; guess < MODULUS; guess++) {
    if (isCorrect(fragment, guess)) valid++;
  }
  check(valid === 1, `${day}: ${valid} valid answers, expected exactly 1`);
}

// Consecutive days must not repeat, or the puzzle is the same every morning.
for (let i = 1; i < days.length; i++) {
  check(
    JSON.stringify(fragmentFor(days[i])) !==
      JSON.stringify(fragmentFor(days[i - 1])),
    `${days[i]}: identical to the previous day`,
  );
}

if (failures.length > 0) {
  console.error(`fragment: ${failures.length} failure(s)`);
  for (const f of failures.slice(0, 20)) console.error("  " + f);
  process.exit(1);
}

console.log(`fragment: ${days.length} days checked, one solution each`);
