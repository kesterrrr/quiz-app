import { cn } from "@/lib/cn";

export type QuestionOutcome = "correct" | "incorrect" | null;

interface ProgressBarProps {
  /** 0-based index of the question currently on screen. */
  currentIndex: number;
  /** One entry per question: "correct", "incorrect", or null if not yet answered. */
  outcomes: QuestionOutcome[];
}

/**
 * One segment per question. Answered segments turn green (correct) or a
 * striped red (incorrect); the question currently on screen is gold;
 * anything still ahead is a plain neutral bar.
 */
function ProgressBar({ currentIndex, outcomes }: ProgressBarProps) {
  const total = outcomes.length;
  const answeredCount = outcomes.filter((o) => o !== null).length;
  const percent = Math.round((answeredCount / total) * 100);

  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={`${answeredCount} of ${total} questions answered`}
    >
      {outcomes.map((outcome, i) => (
        <div
          key={i}
          className={cn(
            "progress-bar__segment",
            outcome === "correct" && "progress-bar__segment--correct",
            outcome === "incorrect" && "progress-bar__segment--incorrect",
            outcome === null && i === currentIndex && "progress-bar__segment--current",
          )}
        />
      ))}
    </div>
  );
}

export default ProgressBar;
