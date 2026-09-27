interface QuizHeaderProps {
  current: number;
  total: number;
}

/**
 * Top banner of the quiz page. Shows the app name and the current
 * question number, e.g. "Question 3 of 10".
 */
function QuizHeader({ current, total }: QuizHeaderProps) {
  return (
    <header className="quiz-header">
      <h1 className="quiz-header__title">Dota 2 Trivia</h1>
      <p className="quiz-header__counter">
        Question {current} of {total}
      </p>
    </header>
  );
}

export default QuizHeader;
