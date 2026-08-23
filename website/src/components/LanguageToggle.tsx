import { LOCALES, LOCALE_META } from "../i18n/locale";
import { useLocale } from "../i18n/context";
import { strings } from "../i18n/strings";

function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <nav className="lang" aria-label={strings[locale].languageLabel}>
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={code === locale ? "lang-btn lang-btn-active" : "lang-btn"}
          aria-current={code === locale}
          onClick={() => setLocale(code)}
        >
          {LOCALE_META[code].name}
        </button>
      ))}
    </nav>
  );
}

export default LanguageToggle;
