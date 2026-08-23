import type { Localized } from "../i18n/locale";

export interface Signal {
  /** ISO date, YYYY-MM-DD. One entry per day, newest anywhere in the list. */
  date: string;
  /** Short transmission line shown under the signal status. */
  text: Localized<string>;
}

/**
 * The daily signal. Add an entry to publish; nothing else has to change.
 * Entries dated in the future are ignored until their day arrives, so a
 * week can be queued up in advance.
 */
export const signals: Signal[] = [
  {
    date: "2026-08-23",
    text: {
      en: "Fourth fragment resolved. Three continents reported the same checksum gap within nine hours of each other.",
      fa: "چهارمین قطعه حل شد. سه قاره در فاصله‌ی نُه ساعت از هم، همان شکافِ جمع کنترلی را گزارش کردند.",
    },
  },
  {
    date: "2026-08-22",
    text: {
      en: "Archive sweep complete. Seventeen station logs preserved and checksummed.",
      fa: "پویش بایگانی کامل شد. گزارش هفده ایستگاه نگهداری و مهر کنترلی شد.",
    },
  },
  {
    date: "2026-08-21",
    text: {
      en: "Carrier re-established. Foundation online.",
      fa: "حامل دوباره برقرار شد. پایه‌ها آنلاین.",
    },
  },
];

/**
 * The newest signal that is not dated in the future.
 * `today` is injected so this stays testable and does not read the clock
 * itself.
 */
export function currentSignal(today: string): Signal | undefined {
  return signals
    .filter((s) => s.date <= today)
    .reduce<Signal | undefined>(
      (newest, s) => (!newest || s.date > newest.date ? s : newest),
      undefined,
    );
}

/** Today's date as YYYY-MM-DD in the viewer's own timezone. */
export function todayISO(now: Date = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}
