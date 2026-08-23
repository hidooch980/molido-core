import { currentSignal, todayISO } from "../content/signals";
import { useStrings } from "../i18n/context";
import { LOCALE_META, type Locale } from "../i18n/locale";

function formatDate(iso: string, locale: Locale): string {
  const date = new Date(`${iso}T00:00:00`);
  const { tag, months } = LOCALE_META[locale];

  if (months) {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  return new Intl.DateTimeFormat(tag, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function SignalStatus() {
  const { locale, t } = useStrings();
  const today = todayISO();
  const signal = currentSignal(today);

  const dateLabel = signal ? formatDate(signal.date, locale) : null;

  return (
    <section className="section" id="signal">
      <h2>{t.signalHeading}</h2>

      <div className="status">
        <span className="pulse" aria-hidden="true" />
        <span className="status-label">{t.signalStatus}</span>
      </div>

      {signal ? (
        <div className="daily">
          <div className="daily-head">
            <span className="daily-tag">{t.dailySignal}</span>
            <time className="daily-date" dateTime={signal.date}>
              {dateLabel}
            </time>
          </div>
          <p className="daily-text">{signal.text[locale]}</p>
        </div>
      ) : null}

      <p className="muted">{t.signalNote}</p>
    </section>
  );
}

export default SignalStatus;
