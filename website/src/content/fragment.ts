/**
 * THE LAST SIGNAL — the fragment puzzle.
 *
 * The story establishes it in chapters 02 and 03: each section of the
 * transmission closes with a checksum that resolves, except one, where the
 * checksum expects fourteen values and receives thirteen. The reader's job
 * is the same as the characters' — work out the rule from the sections that
 * do resolve, then recover the value that is missing.
 *
 * Everyone sees the same fragment on the same day. That is deliberate: the
 * story says the thing cannot be finished alone, so the puzzle has to be
 * shareable rather than personal.
 */

export const SECTION_LENGTH = 14;
export const MODULUS = 256;

export interface Section {
  values: number[];
  checksum: number;
}

export interface Fragment {
  /** Sections whose checksum already resolves; these teach the rule. */
  solved: Section[];
  /** The incomplete section: thirteen values and the checksum it expects. */
  incomplete: {
    values: number[];
    checksum: number;
    /** Index the missing value belongs at. */
    gapIndex: number;
  };
  /** The value that closes the checksum. */
  answer: number;
}

/**
 * Small deterministic PRNG (mulberry32). Math.random would give every
 * visitor a different fragment, which breaks the premise.
 */
function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seedFrom(date: string): number {
  let h = 2166136261;
  for (let i = 0; i < date.length; i++) {
    h ^= date.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const checksumOf = (values: number[]): number =>
  values.reduce((sum, v) => (sum + v) % MODULUS, 0);

/** The fragment for a given day, as YYYY-MM-DD. */
export function fragmentFor(date: string): Fragment {
  const next = rng(seedFrom(date));
  const section = (): number[] =>
    Array.from({ length: SECTION_LENGTH }, () => Math.floor(next() * MODULUS));

  const solved: Section[] = Array.from({ length: 3 }, () => {
    const values = section();
    return { values, checksum: checksumOf(values) };
  });

  const full = section();
  const gapIndex = Math.floor(next() * SECTION_LENGTH);
  const answer = full[gapIndex];

  return {
    solved,
    incomplete: {
      values: full.filter((_, i) => i !== gapIndex),
      checksum: checksumOf(full),
      gapIndex,
    },
    answer,
  };
}

/** True when `guess` closes the checksum. */
export function isCorrect(fragment: Fragment, guess: number): boolean {
  return (
    (checksumOf(fragment.incomplete.values) + guess) % MODULUS ===
    fragment.incomplete.checksum
  );
}
