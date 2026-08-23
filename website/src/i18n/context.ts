import { createContext, useContext } from "react";
import { DEFAULT_LOCALE, type Locale } from "./locale";
import { strings, type Strings } from "./strings";

export interface LocaleValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<LocaleValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});

export function useLocale(): LocaleValue {
  return useContext(LocaleContext);
}

/** The active locale plus its string table, which is what most views need. */
export function useStrings(): { locale: Locale; t: Strings } {
  const { locale } = useLocale();
  return { locale, t: strings[locale] };
}
