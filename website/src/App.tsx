import { useEffect, useMemo, useState } from "react";
import Story from "./components/Story";
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
          <section className="section" id="signal">
            <h2>{t.signalHeading}</h2>
            <div className="status">
              <span className="pulse" aria-hidden="true" />
              <span className="status-label">{t.signalStatus}</span>
            </div>
            <p className="muted">{t.signalNote}</p>
          </section>

          <Story />

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
