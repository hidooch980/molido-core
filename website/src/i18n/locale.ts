export const LOCALES = ["en", "fa"] as const;

export type Locale = (typeof LOCALES)[number];

/** Every user-visible string exists in every locale. */
export type Localized<T> = Record<Locale, T>;

export const LOCALE_META: Localized<{ name: string; dir: "ltr" | "rtl" }> = {
  en: { name: "English", dir: "ltr" },
  fa: { name: "فارسی", dir: "rtl" },
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
