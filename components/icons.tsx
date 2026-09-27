type IconProps = { className?: string };

/** Small filled play triangle, used on the Start Quiz button. */
export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M5 3.5c0-.9 1-1.5 1.8-1l10 6.5c.7.5.7 1.5 0 2l-10 6.5c-.8.5-1.8-.1-1.8-1V3.5Z" />
    </svg>
  );
}

/** Chevron-arrow, used on the Next / See results button. */
export function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 4.5 14 10l-6 5.5" />
    </svg>
  );
}

/** Circular refresh arrows, used on Retake Quiz. */
export function RefreshIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M15.5 6.5A6 6 0 1 0 16 10" />
      <path d="M15.5 3v3.6H12" />
    </svg>
  );
}

/** Simple house outline, used on Return Home. */
export function HomeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M3.5 9.5 10 3.8l6.5 5.7" />
      <path d="M5.2 8.3V16h9.6V8.3" />
    </svg>
  );
}

/** Small solid diamond, used as a rank-badge emblem and as decoration. */
export function DiamondIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M10 1.5 18 10l-8 8.5L2 10Z" />
    </svg>
  );
}
