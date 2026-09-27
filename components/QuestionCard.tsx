import AnswerOption from "./AnswerOption";
import { ArrowIcon } from "./icons";

interface QuestionCardProps {
  questionNumber: number;
  questionText: string;
  choices: string[];
  selectedAnswer: string | null;
  onSelectAnswer: (choice: string) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

/**
 * Shows one question: its number, its text, and its four answer choices.
 * The Next button lives here too, and is disabled until an answer is picked.
 */
function QuestionCard({
  questionNumber,
  questionText,
  choices,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  isLastQuestion,
}: QuestionCardProps) {
  return (
    <section className="question-card">
      <p className="question-card__number">Question {questionNumber}</p>
      <h2 className="question-card__text">{questionText}</h2>

      <div className="question-card__choices">
        {choices.map((choice) => (
          <AnswerOption
            key={choice}
            label={choice}
            isSelected={selectedAnswer === choice}
            onSelect={() => onSelectAnswer(choice)}
          />
        ))}
      </div>

      <button
        type="button"
        className="btn btn--primary question-card__next"
        disabled={selectedAnswer === null}
        onClick={onNext}
      >
        {isLastQuestion ? "See results" : "Next"}
        <ArrowIcon className="btn__icon" />
      </button>
    </section>
  );
}

export default QuestionCard;
