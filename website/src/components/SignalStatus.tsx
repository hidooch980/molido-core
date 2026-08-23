import { currentSignal, todayISO } from "../content/signals";
import { useStrings } from "../i18n/context";

function SignalStatus() {
  const { locale, t } = useStrings();
  const today = todayISO();
  const signal = currentSignal(today);

  const dateLabel = signal
    ? new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(`${signal.date}T00:00:00`))
    : null;

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
