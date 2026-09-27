"use client";

import { useState } from "react";
import questions from "@/data/questions";
import HomeScreen from "./HomeScreen";
import QuizScreen from "./QuizScreen";
import ResultScreen from "./ResultScreen";
import type { QuestionOutcome } from "./ProgressBar";

const TOTAL = questions.length;

type View = "home" | "quiz" | "result";

/**
 * Owns all quiz state and switches between the home, quiz, and result
 * screens. Questions come from a plain array (see data/questions.ts) —
 * there's no backend involved.
 */
function QuizApp() {
  const [view, setView] = useState<View>("home");

  // Quiz progress. `outcomes` has one slot per question: "correct",
  // "incorrect", or null until that question has been answered.
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [outcomes, setOutcomes] = useState<QuestionOutcome[]>(() => questions.map(() => null));

  const correctCount = outcomes.filter((o) => o === "correct").length;

  function handleStart() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setOutcomes(questions.map(() => null));
    setView("quiz");
  }

  function handleSelectAnswer(choice: string) {
    setSelectedAnswer(choice);
  }

  function handleNext() {
    const current = questions[currentIndex];
    const isCorrect = selectedAnswer === current.correctAnswer;
    const updatedOutcomes = outcomes.map((o, i) =>
      i === currentIndex ? (isCorrect ? "correct" : "incorrect") : o,
    );

    if (currentIndex === TOTAL - 1) {
      setOutcomes(updatedOutcomes);
      setView("result");
      return;
    }

    setOutcomes(updatedOutcomes);
    setCurrentIndex((i) => i + 1);
    setSelectedAnswer(null);
  }

  function handleReturnHome() {
    setView("home");
  }

  return (
    <div className="app">
      {view === "home" && <HomeScreen questionCount={TOTAL} onStart={handleStart} />}

      {view === "quiz" && (
        <QuizScreen
          questions={questions}
          currentIndex={currentIndex}
          selectedAnswer={selectedAnswer}
          outcomes={outcomes}
          onSelectAnswer={handleSelectAnswer}
          onNext={handleNext}
        />
      )}

      {view === "result" && (
        <ResultScreen
          total={TOTAL}
          correctCount={correctCount}
          onRetake={handleStart}
          onReturnHome={handleReturnHome}
        />
      )}
    </div>
  );
}

export default QuizApp;
