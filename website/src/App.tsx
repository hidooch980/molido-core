import { useEffect, useState } from "react";


const signals = [
"SIGNAL DETECTED",
"UNKNOWN TRANSMISSION",
"FRAGMENT DISCOVERED",
"THE SIGNAL IS WATCHING",
];


function App() {
const [signal, setSignal] = useState(signals[0]);


useEffect(() => {
const timer = window.setInterval(() => {
setSignal((current) => {
const index = signals.indexOf(current);
return signals[(index + 1) % signals.length];
});
}, 3200);


return () => window.clearInterval(timer);



}, []);


return (
<>






    <nav className="navbar">
      <div className="brand-mark">MOLIDO</div>

      <div className="nav-links">
        <a href="#signal">Signal</a>
        <a href="#story">Story</a>
        <a href="#community">Community</a>
      </div>
    </nav>

    <section id="signal" className="hero">
      <div className="hero-content">
        <p className="eyebrow">GLOBAL SIGNAL // 001</p>

        <h1>
          THE
          <span>LAST SIGNAL</span>
        </h1>

        <p className="signal-status">{signal}</p>

        <p className="hero-description">
          Something unknown has reached Earth.
          <br />
          The message has not been decoded.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#story">
            ENTER THE SIGNAL
          </a>

          <a
            className="secondary-button"
            href="https://t.me/Molidoo"
            target="_blank"
            rel="noreferrer"
          >
            JOIN TELEGRAM
          </a>
        </div>
      </div>

      <div className="signal-orb" aria-hidden="true">
        <div className="orb-core" />
        <div className="orb-ring orb-ring-one" />
        <div className="orb-ring orb-ring-two" />
        <div className="orb-ring orb-ring-three" />
      </div>
    </section>

    <section id="story" className="story-section">
      <p className="section-label">THE STORY</p>

      <h2>Something is coming.</h2>

      <p>
        A signal appeared without warning. Its origin is unknown. Its
        fragments are scattered across the world.
      </p>

      <p>
        Discover the fragments. Follow the clues. Become part of the
        story.
      </p>
    </section>

    <section id="community" className="community-section">
      <div>
        <p className="section-label">MOLIDO COMMUNITY</p>
        <h2>The journey begins now.</h2>
      </div>

      <a
        className="primary-button"
        href="https://youtube.com/@molido-v7z"
        target="_blank"
        rel="noreferrer"
      >
        WATCH ON YOUTUBE
      </a>
    </section>

    <footer>
      <span>MOLIDO © 2026</span>
      <span>THE LAST SIGNAL</span>
    </footer>
  </main>
</>



);
}


export default App;


