/**
 * THE LAST SIGNAL — weekly puzzle rotation.
 *
 * The kind of puzzle changes every ISO week; the instance changes every day.
 * That gives variety without removing the reason to come back tomorrow.
 *
 * The three kinds are deliberately different *reasoning*, not different
 * skins: one is arithmetic inversion, one is cross-referencing two
 * constraints, one is detecting periodicity. A player who is good at one is
 * not automatically good at the next.
 *
 * Every puzzle must have exactly one valid answer. scripts/verify-fragment.ts
 * proves that over a year of days for every kind.
 */

export const MODULUS = 256;
export const SECTION_LENGTH = 14;

export type PuzzleKind = "checksum" | "parity" | "period";

/** Order of rotation. Week 0 gets the first, and so on. */
export const KINDS: readonly PuzzleKind[] = ["checksum", "parity", "period"];

export interface Section {
  values: number[];
  checksum: number;
}

export interface ChecksumPuzzle {
  kind: "checksum";
  solved: Section[];
  values: number[];
  checksum: number;
  gapIndex: number;
  answer: number;
}

export interface ParityPuzzle {
  kind: "parity";
  /** Square grid of values, one of which has been corrupted in transit. */
  grid: number[][];
  /** Parity each row should satisfy. */
  rowParity: number[];
  /** Parity each column should satisfy. */
  colParity: number[];
  /** 1-based position of the corrupted cell, read left to right, top to bottom. */
  answer: number;
}

export interface PeriodPuzzle {
  kind: "period";
  values: number[];
  /** The repeat length, which is what the player recovers. */
  answer: number;
  /** Candidate range shown to the player. */
  min: number;
  max: number;
}

export type Puzzle = ChecksumPuzzle | ParityPuzzle | PeriodPuzzle;

/** mulberry32 — deterministic, so everyone sees the same puzzle. */
function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seedFrom(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const sumMod = (values: number[]): number =>
  values.reduce((sum, v) => (sum + v) % MODULUS, 0);

/** ISO-8601 week number. Weeks turn over on Monday. */
export function isoWeek(date: string): number {
  const d = new Date(`${date}T00:00:00Z`);
  const day = (d.getUTCDay() + 6) % 7; // Monday = 0
  d.setUTCDate(d.getUTCDate() - day + 3); // nearest Thursday
  const firstThursday = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  const firstDay = (firstThursday.getUTCDay() + 6) % 7;
  firstThursday.setUTCDate(firstThursday.getUTCDate() - firstDay + 3);
  return (
    1 + Math.round((d.getTime() - firstThursday.getTime()) / (7 * 86400000))
  );
}

/** Which kind of puzzle this date's week is running. */
export function kindFor(date: string): PuzzleKind {
  const week = isoWeek(date);
  return KINDS[((week % KINDS.length) + KINDS.length) % KINDS.length];
}

function makeChecksum(next: () => number): ChecksumPuzzle {
  const section = () =>
    Array.from({ length: SECTION_LENGTH }, () => Math.floor(next() * MODULUS));

  const solved = Array.from({ length: 3 }, () => {
    const values = section();
    return { values, checksum: sumMod(values) };
  });

  const full = section();
  const gapIndex = Math.floor(next() * SECTION_LENGTH);

  return {
    kind: "checksum",
    solved,
    values: full.filter((_, i) => i !== gapIndex),
    checksum: sumMod(full),
    gapIndex,
    answer: full[gapIndex],
  };
}

const SIZE = 5;

function makeParity(next: () => number): ParityPuzzle {
  const grid = Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => Math.floor(next() * MODULUS)),
  );

  // Parities describe the grid as it should have arrived.
  const rowParity = grid.map((row) => sumMod(row) % 2);
  const colParity = Array.from({ length: SIZE }, (_, c) =>
    sumMod(grid.map((row) => row[c])) % 2,
  );

  // Corrupt exactly one cell, flipping its parity so the row and the column
  // it sits on both disagree - and no others do.
  const r = Math.floor(next() * SIZE);
  const c = Math.floor(next() * SIZE);
  grid[r][c] = (grid[r][c] + 1) % MODULUS;

  return { kind: "parity", grid, rowParity, colParity, answer: r * SIZE + c + 1 };
}

const MIN_PERIOD = 2;
const MAX_PERIOD = 9;

function makePeriod(next: () => number): PeriodPuzzle {
  const period = MIN_PERIOD + Math.floor(next() * (MAX_PERIOD - MIN_PERIOD + 1));

  // A base cycle whose values are distinct, so no shorter period also fits.
  const cycle: number[] = [];
  while (cycle.length < period) {
    const v = Math.floor(next() * MODULUS);
    if (!cycle.includes(v)) cycle.push(v);
  }

  // Repeat it enough times that the repeat is visible but not laboured, and
  // stop on a whole cycle so the tail cannot suggest a longer period.
  const repeats = Math.max(3, Math.ceil(28 / period));
  const values = Array.from(
    { length: period * repeats },
    (_, i) => cycle[i % period],
  );

  return { kind: "period", values, answer: period, min: MIN_PERIOD, max: MAX_PERIOD };
}

/** The puzzle for a given day, as YYYY-MM-DD. */
export function puzzleFor(date: string): Puzzle {
  const next = rng(seedFrom(date));
  switch (kindFor(date)) {
    case "checksum":
      return makeChecksum(next);
    case "parity":
      return makeParity(next);
    case "period":
      return makePeriod(next);
  }
}

/** True when `guess` solves the puzzle. */
export function isCorrect(puzzle: Puzzle, guess: number): boolean {
  switch (puzzle.kind) {
    case "checksum":
      return (sumMod(puzzle.values) + guess) % MODULUS === puzzle.checksum;
    case "parity":
    case "period":
      return guess === puzzle.answer;
  }
}

/** Inclusive range of valid answers, for input bounds and hints. */
export function answerRange(puzzle: Puzzle): { min: number; max: number } {
  switch (puzzle.kind) {
    case "checksum":
      return { min: 0, max: MODULUS - 1 };
    case "parity":
      return { min: 1, max: SIZE * SIZE };
    case "period":
      return { min: puzzle.min, max: puzzle.max };
  }
}
