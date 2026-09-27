import type { Question } from "@/data/questions";
import QuizHeader from "./QuizHeader";
import ProgressBar, { type QuestionOutcome } from "./ProgressBar";
import QuestionCard from "./QuestionCard";

interface QuizScreenProps {
  questions: Question[];
  currentIndex: number;
  selectedAnswer: string | null;
  outcomes: QuestionOutcome[];
  onSelectAnswer: (choice: string) => void;
  onNext: () => void;
}

/**
 * The active quiz screen. Receives everything it needs as props; all the
 * actual state (current question, selected answer, score) lives in QuizApp.
 */
function QuizScreen({
  questions,
  currentIndex,
  selectedAnswer,
  outcomes,
  onSelectAnswer,
  onNext,
}: QuizScreenProps) {
  const total = questions.length;
  const current = questions[currentIndex];

  return (
    <section className="quiz-page">
      <QuizHeader current={currentIndex + 1} total={total} />
      <ProgressBar currentIndex={currentIndex} outcomes={outcomes} />
      <QuestionCard
        questionNumber={currentIndex + 1}
        questionText={current.question}
        choices={current.choices}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={onSelectAnswer}
        onNext={onNext}
        isLastQuestion={currentIndex === total - 1}
      />
    </section>
  );
}

export default QuizScreen;
