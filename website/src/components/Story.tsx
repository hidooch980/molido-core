import { chapters, type ChapterStatus } from "../content/story";
import { useStrings } from "../i18n/context";
import type { Strings } from "../i18n/strings";

function statusLabel(status: ChapterStatus, t: Strings): string {
  switch (status) {
    case "transmitted":
      return t.statusTransmitted;
    case "incoming":
      return t.statusIncoming;
    case "sealed":
      return t.statusSealed;
  }
}

function Story() {
  const { locale, t } = useStrings();

  return (
    <section className="section" id="story">
      <h2>{t.storyHeading}</h2>
      <p>{t.storyIntro}</p>

      <ol className="chapters">
        {chapters.map((c) => (
          <li key={c.id} className={`chapter chapter-${c.status}`}>
            <div className="chapter-head">
              <span className="chapter-no">{String(c.id).padStart(2, "0")}</span>
              <span className="chapter-stage">{c.stage[locale]}</span>
              <span className={`chapter-status status-${c.status}`}>
                {statusLabel(c.status, t)}
              </span>
            </div>
            <h3 className="chapter-title">{c.title[locale]}</h3>
            <p className="chapter-teaser">{c.teaser[locale]}</p>
            {c.body?.[locale].map((paragraph, i) => (
              <p key={i} className="chapter-body">
                {paragraph}
              </p>
            ))}
          </li>
        ))}
      </ol>

      <p className="muted">{t.storyFootnote}</p>
    </section>
  );
}

export default Story;
