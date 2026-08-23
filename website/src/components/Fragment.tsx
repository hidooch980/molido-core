import { useMemo, useState } from "react";
import {
  puzzleFor,
  isCorrect,
  answerRange,
  type ChecksumPuzzle,
  type ParityPuzzle,
  type PeriodPuzzle,
  type Puzzle,
} from "../content/puzzles";
import { todayISO } from "../content/signals";
import { useStrings } from "../i18n/context";
import type { Strings } from "../i18n/strings";

type Result = "unanswered" | "correct" | "wrong";

function Cells({ values, gapIndex }: { values: number[]; gapIndex?: number }) {
  const cells: React.ReactNode[] = [];
  values.forEach((v, i) => {
    if (i === gapIndex) {
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

function ChecksumView({ puzzle, t }: { puzzle: ChecksumPuzzle; t: Strings }) {
  return (
    <div className="fragment">
      {puzzle.solved.map((section, i) => (
        <div className="frag-section" key={i}>
          <Cells values={section.values} />
          <div className="frag-meta">
            <span className="frag-sum">
              {t.fragmentChecksum} {section.checksum}
            </span>
            <span className="frag-ok">{t.fragmentResolves}</span>
          </div>
        </div>
      ))}
      <div className="frag-section frag-section-open">
        <Cells values={puzzle.values} gapIndex={puzzle.gapIndex} />
        <div className="frag-meta">
          <span className="frag-sum">
            {t.fragmentChecksum} {puzzle.checksum}
          </span>
          <span className="frag-open">{t.fragmentExpects}</span>
        </div>
      </div>
    </div>
  );
}

function ParityView({ puzzle, t }: { puzzle: ParityPuzzle; t: Strings }) {
  const size = puzzle.grid.length;
  return (
    <div className="fragment">
      <div className="frag-section frag-section-open">
        <div className="grid" style={{ "--cols": size } as React.CSSProperties}>
          {puzzle.grid.map((row, r) => (
            <div className="grid-row" key={r}>
              <div className="cells">
                {row.map((v, c) => (
                  <span className="cell" key={c}>
                    {v}
                  </span>
                ))}
              </div>
              <span className="parity-mark">
                {t.parityRow} {puzzle.rowParity[r]}
              </span>
            </div>
          ))}
          <div className="grid-row grid-cols">
            <div className="cells">
              {puzzle.colParity.map((p, c) => (
                <span className="cell cell-parity" key={c}>
                  {p}
                </span>
              ))}
            </div>
            <span className="parity-mark">{t.parityColumn}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PeriodView({ puzzle }: { puzzle: PeriodPuzzle }) {
  return (
    <div className="fragment">
      <div className="frag-section frag-section-open">
        <Cells values={puzzle.values} />
      </div>
    </div>
  );
}

function intro(puzzle: Puzzle, t: Strings): string {
  switch (puzzle.kind) {
    case "checksum":
      return t.fragmentIntro;
    case "parity":
      return t.parityIntro;
    case "period":
      return t.periodIntro;
  }
}

function prompt(puzzle: Puzzle, t: Strings): string {
  switch (puzzle.kind) {
    case "checksum":
      return t.fragmentPrompt;
    case "parity":
      return t.parityPrompt;
    case "period":
      return t.periodPrompt;
  }
}

function Fragment() {
  const { t } = useStrings();
  const today = todayISO();
  const puzzle = useMemo(() => puzzleFor(today), [today]);
  const range = answerRange(puzzle);

  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<Result>("unanswered");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const n = Number(guess);
    if (!Number.isInteger(n) || n < range.min || n > range.max) {
      setResult("wrong");
      return;
    }
    setResult(isCorrect(puzzle, n) ? "correct" : "wrong");
  }

  return (
    <section className="section" id="fragment">
      <h2>{t.fragmentHeading}</h2>
      <p>{intro(puzzle, t)}</p>

      {puzzle.kind === "checksum" ? (
        <ChecksumView puzzle={puzzle} t={t} />
      ) : puzzle.kind === "parity" ? (
        <ParityView puzzle={puzzle} t={t} />
      ) : (
        <PeriodView puzzle={puzzle} />
      )}

      <form className="frag-form" onSubmit={submit}>
        <label className="frag-label" htmlFor="frag-guess">
          {prompt(puzzle, t)}
        </label>
        <div className="frag-row">
          <input
            id="frag-guess"
            className="frag-input"
            type="number"
            inputMode="numeric"
            min={range.min}
            max={range.max}
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
