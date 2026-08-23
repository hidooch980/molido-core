import { LOCALES, LOCALE_META, type Locale } from "../i18n/locale";
import { useLocale } from "../i18n/context";
import { strings } from "../i18n/strings";

/**
 * Eight languages is too many for a row of buttons on a phone, so this is a
 * native select: one tap, and the OS renders the list in its own language
 * picker rather than something we have to style for every script.
 */
function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const label = strings[locale].languageLabel;

  return (
    <div className="lang">
      <label className="lang-label" htmlFor="molido-lang">
        {label}
      </label>
      <select
        id="molido-lang"
        className="lang-select"
        value={locale}
        aria-label={label}
        onChange={(e) => setLocale(e.target.value as Locale)}
      >
        {LOCALES.map((code) => (
          <option key={code} value={code} lang={code}>
            {LOCALE_META[code].name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageToggle;
