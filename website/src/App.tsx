import { useEffect, useMemo, useState } from "react";
import SignalField from "./components/SignalField";
import Story from "./components/Story";
import Fragment from "./components/Fragment";
import SignalStatus from "./components/SignalStatus";
import LanguageToggle from "./components/LanguageToggle";
import { LocaleContext } from "./i18n/context";
import { strings } from "./i18n/strings";
import { detectLocale, storeLocale, LOCALE_META, type Locale } from "./i18n/locale";

const TELEGRAM_URL = "https://t.me/Molidoo";
const YOUTUBE_URL = "https://youtube.com/@molido-v7z";

function App() {
  const [locale, setLocale] = useState<Locale>(detectLocale);
  const t = strings[locale];

  // The document itself has to carry the language and direction, otherwise
  // the browser lays Persian out left-to-right and hyphenates it wrongly.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = LOCALE_META[locale].dir;
    storeLocale(locale);
  }, [locale]);

  const ctx = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LocaleContext.Provider value={ctx}>
      <SignalField />
      <div className="molido-app">
        <header className="hero">
          <LanguageToggle />
          <p className="eyebrow">{t.brand}</p>
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-text">{t.heroText}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              {t.ctaTelegram}
            </a>
            <a className="btn" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
              {t.ctaYoutube}
            </a>
          </div>
        </header>

        <main>
          <SignalStatus />

          <Story />

          <Fragment />

          <section className="section" id="community">
            <h2>{t.communityHeading}</h2>
            <p>{t.communityText}</p>
          </section>

          <section className="section" id="youtube">
            <h2>{t.youtubeHeading}</h2>
            <p className="muted">{t.youtubeText}</p>
            <a className="btn" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
              youtube.com/@molido-v7z
            </a>
          </section>

          <section className="section" id="telegram">
            <h2>{t.telegramHeading}</h2>
            <p className="muted">{t.telegramText}</p>
            <a className="btn" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              t.me/Molidoo
            </a>
          </section>
        </main>

        <footer className="footer">
          <p>
            {t.brand} — {t.heroTitle}
          </p>
          <p className="muted">{t.footerTagline}</p>
        </footer>
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
