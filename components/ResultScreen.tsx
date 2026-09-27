import ResultCard from "./ResultCard";

interface ResultScreenProps {
  total: number;
  correctCount: number;
  onRetake: () => void;
  onReturnHome: () => void;
}

/** Results screen shown once every question has been answered. */
function ResultScreen({ total, correctCount, onRetake, onReturnHome }: ResultScreenProps) {
  return (
    <section className="result-page">
      <ResultCard
        total={total}
        correctCount={correctCount}
        incorrectCount={total - correctCount}
        onRetake={onRetake}
        onReturnHome={onReturnHome}
      />
    </section>
  );
}

export default ResultScreen;
