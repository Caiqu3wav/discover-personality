import options from "./options";
import { mbtiTypes } from "./types";

export function calculeResult(userAnswers) {
  const cognitiveFunctions = {
    Ni: 0,
    Ne: 0,
    Se: 0,
    Si: 0,
    Te: 0,
    Ti: 0,
    Fe: 0,
    Fi: 0,
  };

  userAnswers.forEach((answer, index) => {
    const question = options[index];

    if (answer === "isA") {
      cognitiveFunctions[question.isA] += 1;
    } else if (answer === "isB") {
      cognitiveFunctions[question.isB] += 1;
    }
  });

  const sortedFunctions = Object.keys(cognitiveFunctions).sort(
    (a, b) => cognitiveFunctions[b] - cognitiveFunctions[a]
  );

  const primaryFunction = sortedFunctions[0]; // A função cognitiva mais pontuada

  const mbtiResult = mbtiTypes[primaryFunction];

  return mbtiResult;
}