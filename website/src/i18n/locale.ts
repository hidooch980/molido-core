export const LOCALES = ["en", "fa", "ar", "ur", "hi", "tr", "az", "zh"] as const;

export type Locale = (typeof LOCALES)[number];

/** Every user-visible string exists in every locale. */
export type Localized<T> = Record<Locale, T>;

export interface LocaleInfo {
  /** Endonym: the language's name in that language. */
  name: string;
  dir: "ltr" | "rtl";
  /** BCP 47 tag used for date formatting. */
  tag: string;
  /**
   * Month names, January first, for locales Intl has no date data for.
   * Chromium resolves every "az" tag to a pattern like "2026 M08 23", and
   * borrowing Turkish would print the wrong month names, so Azerbaijani
   * supplies its own.
   */
  months?: readonly string[];
}

export const LOCALE_META: Localized<LocaleInfo> = {
  en: { name: "English", dir: "ltr", tag: "en-GB" },
  fa: { name: "فارسی", dir: "rtl", tag: "fa-IR" },
  ar: { name: "العربية", dir: "rtl", tag: "ar" },
  ur: { name: "اردو", dir: "rtl", tag: "ur" },
  hi: { name: "हिन्दी", dir: "ltr", tag: "hi-IN" },
  tr: { name: "Türkçe", dir: "ltr", tag: "tr-TR" },
  az: {
    name: "Azərbaycanca",
    dir: "ltr",
    tag: "az",
    months: [
      "yanvar", "fevral", "mart", "aprel", "may", "iyun",
      "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr",
    ],
  },
  zh: { name: "中文", dir: "ltr", tag: "zh-CN" },
};

export const DEFAULT_LOCALE: Locale = "en";

const STORAGE_KEY = "molido.locale";

function isLocale(value: string | null): value is Locale {
  return value !== null && (LOCALES as readonly string[]).includes(value);
}

/** Remembered choice, else the browser's preference, else English. */
export function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Storage can throw in private windows; fall through to the language check.
  }
  if (typeof navigator !== "undefined") {
    for (const tag of navigator.languages ?? [navigator.language]) {
      const base = tag.split("-")[0];
      if (isLocale(base)) return base;
    }
  }
  return DEFAULT_LOCALE;
}

export function storeLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // A remembered choice is a convenience, never a requirement.
  }
}
