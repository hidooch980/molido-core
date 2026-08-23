import { useMemo, useState } from "react";
import { fragmentFor, isCorrect, MODULUS } from "../content/fragment";
import { todayISO } from "../content/signals";
import { useStrings } from "../i18n/context";

type Result = "unanswered" | "correct" | "wrong";

function Row({ values, gapIndex }: { values: number[]; gapIndex?: number }) {
  const cells: React.ReactNode[] = [];
  values.forEach((v, i) => {
    if (gapIndex !== undefined && i === gapIndex) {
      cells.push(
        <span key="gap" className="cell cell-gap">
          ?
        </span>,
      );
    }
    cells.push(
      <span key={i} className="cell">
        {v}
      </span>,
    );
  });
  if (gapIndex !== undefined && gapIndex >= values.length) {
    cells.push(
      <span key="gap" className="cell cell-gap">
        ?
      </span>,
    );
  }
  return <div className="cells">{cells}</div>;
}

function Fragment() {
  const { t } = useStrings();
  const today = todayISO();
  const fragment = useMemo(() => fragmentFor(today), [today]);

  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<Result>("unanswered");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const n = Number(guess);
    if (!Number.isInteger(n) || n < 0 || n >= MODULUS) {
      setResult("wrong");
      return;
    }
    setResult(isCorrect(fragment, n) ? "correct" : "wrong");
  }

  return (
    <section className="section" id="fragment">
      <h2>{t.fragmentHeading}</h2>
      <p>{t.fragmentIntro}</p>

      <div className="fragment">
        {fragment.solved.map((section, i) => (
          <div className="frag-section" key={i}>
            <Row values={section.values} />
            <div className="frag-meta">
              <span className="frag-sum">
                {t.fragmentChecksum} {section.checksum}
              </span>
              <span className="frag-ok">{t.fragmentResolves}</span>
            </div>
          </div>
        ))}

        <div className="frag-section frag-section-open">
          <Row
            values={fragment.incomplete.values}
            gapIndex={fragment.incomplete.gapIndex}
          />
          <div className="frag-meta">
            <span className="frag-sum">
              {t.fragmentChecksum} {fragment.incomplete.checksum}
            </span>
            <span className="frag-open">{t.fragmentExpects}</span>
          </div>
        </div>
      </div>

      <form className="frag-form" onSubmit={submit}>
        <label className="frag-label" htmlFor="frag-guess">
          {t.fragmentPrompt}
        </label>
        <div className="frag-row">
          <input
            id="frag-guess"
            className="frag-input"
            type="number"
            inputMode="numeric"
            min={0}
            max={MODULUS - 1}
            value={guess}
            onChange={(e) => {
              setGuess(e.target.value);
              setResult("unanswered");
            }}
          />
          <button className="btn btn-primary" type="submit">
            {t.fragmentVerify}
          </button>
        </div>
      </form>

      {result !== "unanswered" ? (
        <p
          className={result === "correct" ? "frag-correct" : "frag-wrong"}
          role="status"
        >
          {result === "correct" ? t.fragmentCorrect : t.fragmentWrong}
        </p>
      ) : null}

      <p className="muted">{t.fragmentShare}</p>
    </section>
  );
}

export default Fragment;
