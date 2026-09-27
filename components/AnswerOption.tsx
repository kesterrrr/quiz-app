interface AnswerOptionProps {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}

/**
 * A single clickable answer choice. Highlights itself when it is the
 * option the student has selected for the current question.
 */
function AnswerOption({ label, isSelected, onSelect }: AnswerOptionProps) {
  return (
    <button
      type="button"
      className={`answer-option${isSelected ? " answer-option--selected" : ""}`}
      onClick={onSelect}
      aria-pressed={isSelected}
    >
      <span className="answer-option__marker" aria-hidden="true" />
      {label}
    </button>
  );
}

export default AnswerOption;
