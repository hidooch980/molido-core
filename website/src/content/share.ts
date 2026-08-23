import type { PuzzleKind } from "./puzzles";

export interface Attempt {
  date: string;
  kind: PuzzleKind;
  attempts: number;
  solved: boolean;
}

const STORAGE_KEY = "molido.fragment";

/** Today's record, if this browser already has one. */
export function loadAttempt(date: string): Attempt | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Attempt>;
    if (parsed.date !== date) return null;
    if (typeof parsed.attempts !== "number" || typeof parsed.solved !== "boolean") {
      return null;
    }
    return parsed as Attempt;
  } catch {
    // Private windows throw, and a corrupt entry should not break the page.
    return null;
  }
}

export function saveAttempt(attempt: Attempt): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attempt));
  } catch {
    // Remembering the day's result is a convenience, never a requirement.
  }
}

/**
 * The text a solver shares.
 *
 * It must never contain the answer, or the first person to post their result
 * ruins the puzzle for everyone else that day. Only the date, which puzzle
 * kind it was, and how many tries it took.
 */
export function shareText(
  attempt: Attempt,
  labels: { title: string; attempts: string },
  url: string,
): string {
  return [
    labels.title,
    `${attempt.date} · ${attempt.kind}`,
    `${labels.attempts}: ${attempt.attempts}`,
    url,
  ].join("\n");
}

export type ShareOutcome = "shared" | "copied" | "failed";

/** Native share sheet where the browser has one, clipboard otherwise. */
export async function share(text: string): Promise<ShareOutcome> {
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({ text });
      return "shared";
    } catch {
      // A dismissed share sheet is not an error worth surfacing; fall
      // through and try the clipboard instead.
    }
  }
  try {
    await navigator.clipboard.writeText(text);
    return "copied";
  } catch {
    return "failed";
  }
}
