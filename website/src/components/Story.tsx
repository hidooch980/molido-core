import { chapters, STATUS_LABEL } from "../content/story";

function Story() {
  return (
    <section className="section" id="story">
      <h2>The Story</h2>
      <p>
        MOLIDO is a global, AI-powered digital ecosystem built around
        interactive storytelling, games, community and creativity. THE LAST
        SIGNAL is its story universe — a single transmission, broken into
        fragments, uncovered by the people who choose to follow it.
      </p>

      <ol className="chapters">
        {chapters.map((c) => (
          <li key={c.id} className={`chapter chapter-${c.status}`}>
            <div className="chapter-head">
              <span className="chapter-no">{String(c.id).padStart(2, "0")}</span>
              <span className="chapter-stage">{c.stage}</span>
              <span className={`chapter-status status-${c.status}`}>
                {STATUS_LABEL[c.status]}
              </span>
            </div>
            <h3 className="chapter-title">{c.title}</h3>
            <p className="chapter-teaser">{c.teaser}</p>
            {c.body?.map((paragraph, i) => (
              <p key={i} className="chapter-body">
                {paragraph}
              </p>
            ))}
          </li>
        ))}
      </ol>

      <p className="muted">
        New fragments are released as the story is written. Nothing here is
        final except what has already been transmitted.
      </p>
    </section>
  );
}

export default Story;
