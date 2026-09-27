export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: string;
}

/**
 * Quiz questions, stored as a plain array of objects (no database/backend).
 * `correctAnswer` must always be one of the four `choices`.
 */
const questions: Question[] = [
  {
    id: 1,
    question: "Which item is dropped for anyone to pick up when its carrier dies?",
    choices: ["Black King Bar", "Divine Rapier", "Blink Dagger", "Aghanim's Scepter"],
    correctAnswer: "Divine Rapier",
  },
  {
    id: 2,
    question: "Which item grants a hero temporary spell immunity?",
    choices: ["Black King Bar", "Silver Edge", "Eul's Scepter", "Shadow Blade"],
    correctAnswer: "Black King Bar",
  },
  {
    id: 3,
    question: "Which unit is used to carry items from the shop to a hero in the lane?",
    choices: ["Familiar", "Courier", "Warden", "Runner"],
    correctAnswer: "Courier",
  },
  {
    id: 4,
    question: "What does Aghanim's Scepter generally do for a hero?",
    choices: [
      "Upgrades one of the hero's abilities",
      "Restores the hero to full health",
      "Grants permanent invisibility",
      "Doubles the hero's movement speed",
    ],
    correctAnswer: "Upgrades one of the hero's abilities",
  },
  {
    id: 5,
    question: "Which item lets a hero instantly relocate a short distance, often to close a gap or escape?",
    choices: ["Force Staff", "Blink Dagger", "Boots of Travel", "Smoke of Deceit"],
    correctAnswer: "Blink Dagger",
  },
  {
    id: 6,
    question: "What is it called when a dead hero spends gold to respawn immediately?",
    choices: ["Rebirth", "Buyback", "Reforge", "Second Wind"],
    correctAnswer: "Buyback",
  },
  {
    id: 7,
    question: "Which ward type reveals invisible enemy units nearby?",
    choices: ["Observer Ward", "Sentry Ward", "Watcher Ward", "Beacon Ward"],
    correctAnswer: "Sentry Ward",
  },
  {
    id: 8,
    question: "Which upgraded boots let a hero teleport between allied structures and creeps?",
    choices: ["Boots of Travel", "Arcane Boots", "Phase Boots", "Tranquil Boots"],
    correctAnswer: "Boots of Travel",
  },
  {
    id: 9,
    question: "Which of these is one of a hero's core attributes in Dota 2?",
    choices: ["Stamina", "Agility", "Charisma", "Luck"],
    correctAnswer: "Agility",
  },
  {
    id: 10,
    question: "Which item passively burns nearby enemies with magical damage, and also affects the wearer's illusions?",
    choices: ["Radiance", "Mjollnir", "Eye of Skadi", "Assault Cuirass"],
    correctAnswer: "Radiance",
  },
];

export default questions;