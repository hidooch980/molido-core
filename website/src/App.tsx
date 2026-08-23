import Story from "./components/Story";

const TELEGRAM_URL = "https://t.me/Molidoo";
const YOUTUBE_URL = "https://youtube.com/@molido-v7z";

function App() {
  return (
    <div className="molido-app">
      <header className="hero">
        <p className="eyebrow">MOLIDO</p>
        <h1 className="hero-title">THE LAST SIGNAL</h1>
        <p className="hero-text">
          The signal has arrived. The journey begins now.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
            Join the Signal
          </a>
          <a className="btn" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
            Watch on YouTube
          </a>
        </div>
      </header>

      <main>
        <section className="section" id="signal">
          <h2>Signal Status</h2>
          <div className="status">
            <span className="pulse" aria-hidden="true" />
            <span className="status-label">SIGNAL DETECTED</span>
          </div>
          <p className="muted">
            Transmission is active. Phase 01 — foundation online.
          </p>
        </section>

        <Story />

        <section className="section" id="community">
          <h2>Community</h2>
          <p>
            The signal belongs to everyone who hears it. No borders, no gates —
            one channel, one story, built in the open.
          </p>
        </section>

        <section className="section" id="youtube">
          <h2>YouTube</h2>
          <p className="muted">Follow the transmission in video form.</p>
          <a className="btn" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
            youtube.com/@molido-v7z
          </a>
        </section>

        <section className="section" id="telegram">
          <h2>Telegram</h2>
          <p className="muted">Live signal channel and community.</p>
          <a className="btn" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
            t.me/Molidoo
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>MOLIDO — THE LAST SIGNAL</p>
        <p className="muted">The signal has arrived. The journey begins now.</p>
      </footer>
    </div>
  );
}

export default App;
