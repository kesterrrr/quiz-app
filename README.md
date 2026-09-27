# Dota 2 Trivia

Next.js (App Router) · TypeScript · plain CSS. A 10-question multiple-choice quiz
about Dota 2, entirely client-side — no database, no API calls.

## Run it

```bash
npm install
npm run dev              # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run typecheck`.

## How it's organized

```
data/questions.ts           the 10 questions, as a plain array of objects
components/
  QuizApp.tsx                "use client" — owns all state, switches screens
  HomeScreen.tsx              title, description, Start Quiz button
  QuizScreen.tsx               wires QuizHeader + ProgressBar + QuestionCard together
  ResultScreen.tsx             wraps ResultCard with the score numbers
  QuizHeader.tsx               "Question X of 10" banner        (required component)
  ProgressBar.tsx               fills as you progress             (required component)
  QuestionCard.tsx               question text + choices + Next   (required component)
  AnswerOption.tsx                one clickable choice, highlights when selected (required)
  ResultCard.tsx                  score / percentage / correct-incorrect / buttons (required)
app/
  page.tsx                    renders <QuizApp />
  layout.tsx, globals.css     page shell and all styling
```

## State

`QuizApp` holds:
- `view`: `"home" | "quiz" | "result"`
- `currentIndex`: which question is showing
- `selectedAnswer`: the choice clicked for the current question (or `null`)
- `answers`: a `boolean[]`, one entry per question answered so far (`true` = correct)

The score is always `answers.filter(Boolean).length`, so it's derived rather than
tracked separately, and can't drift out of sync with the progress bar. Pressing
**Next** compares `selectedAnswer` to the question's `correctAnswer`, appends the
result to `answers`, and either moves to the next question or (on the last one)
switches to the result screen.

## Adding/editing questions

Edit `data/questions.ts`. Each entry needs a unique `id`, `question` text, a
`choices` array, and a `correctAnswer` that's exactly one of those choices.
