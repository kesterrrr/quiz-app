import { DiamondIcon, HomeIcon, RefreshIcon } from "./icons";

interface ResultCardProps {
  total: number;
  correctCount: number;
  incorrectCount: number;
  onRetake: () => void;
  onReturnHome: () => void;
}

interface Rank {
  label: string;
  colorVar: string;
}

/** Maps a percentage to one of Dota 2's real rank-tier names, for flavor. */
function getRank(percent: number): Rank {
  if (percent === 100) return { label: "Immortal", colorVar: "var(--color-gold-bright)" };
  if (percent >= 80) return { label: "Divine", colorVar: "var(--color-blue)" };
  if (percent >= 60) return { label: "Ancient", colorVar: "var(--color-green)" };
  if (percent >= 40) return { label: "Legend", colorVar: "var(--color-purple)" };
  return { label: "Herald", colorVar: "var(--color-text-soft)" };
}

/**
 * Final results: how many questions there were, how many the student got
 * right/wrong, the score, and the percentage. Also offers to retake the
 * quiz or go back to the home page.
 */
function ResultCard({ total, correctCount, incorrectCount, onRetake, onReturnHome }: ResultCardProps) {
  const percent = Math.round((correctCount / total) * 100);
  const rank = getRank(percent);

  return (
    <section className="result-card">
      <h2 className="result-card__title">Quiz complete!</h2>

      <div className="result-card__badge" style={{ ["--rank-color" as string]: rank.colorVar }}>
        <DiamondIcon className="result-card__badge-icon" />
        <span>{rank.label}</span>
      </div>

      <p className="result-card__score">
        <span className="result-card__score-number">{correctCount}</span>
        <span className="result-card__score-total"> / {total}</span>
      </p>
      <p className="result-card__percent">{percent}%</p>

      <dl className="result-card__stats">
        <div className="result-card__stat">
          <dt>Total questions</dt>
          <dd>{total}</dd>
        </div>
        <div className="result-card__stat">
          <dt>Correct answers</dt>
          <dd className="result-card__stat--correct">{correctCount}</dd>
        </div>
        <div className="result-card__stat">
          <dt>Incorrect answers</dt>
          <dd className="result-card__stat--incorrect">{incorrectCount}</dd>
        </div>
      </dl>

      <div className="result-card__actions">
        <button type="button" className="btn btn--primary" onClick={onRetake}>
          <RefreshIcon className="btn__icon" />
          Retake Quiz
        </button>
        <button type="button" className="btn btn--secondary" onClick={onReturnHome}>
          <HomeIcon className="btn__icon" />
          Return Home
        </button>
      </div>
    </section>
  );
}

export default ResultCard;
