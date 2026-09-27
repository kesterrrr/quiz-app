import { PlayIcon, DiamondIcon } from "./icons";

interface HomeScreenProps {
  questionCount: number;
  onStart: () => void;
}

/** Landing page: app title, short description, and the Start Quiz button. */
function HomeScreen({ questionCount, onStart }: HomeScreenProps) {
  return (
    <section className="home-page">
      <div className="rune-emblem" aria-hidden="true">
        <DiamondIcon className="rune-emblem__gem" />
      </div>

      <p className="home-page__overline"></p>

      <h1 className="home-page__title">
        <DiamondIcon className="home-page__title-mark" />
        Dota 2 Trivia
        <DiamondIcon className="home-page__title-mark" />
      </h1>

      <p className="home-page__description">
        Test your knowledge of Dota 2 heroes, items, and gameplay mechanics with{" "}
        {questionCount} multiple-choice questions.
      </p>

      <div className="ornament" aria-hidden="true">
        <span className="ornament__line" />
        <DiamondIcon className="ornament__gem" />
        <span className="ornament__line" />
      </div>

      <button type="button" className="btn btn--primary btn--large" onClick={onStart}>
        <PlayIcon className="btn__icon" />
        Start Quiz
      </button>
    </section>
  );
}

export default HomeScreen;
