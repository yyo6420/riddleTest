import { riddles } from "./allRilddles.js";
import input from "analiza-sync";

const gameStatistics = {
  correctAnswers: 0,
  wrongAnswers: 0,
  timer: 0,
};

function getRidlle(ridlle) {
  const statTimer = Date.now();
  const answer = input(
    `${ridlle["taskDescription"]} \n${ridlle["choices"]} \n`
  );
  if (answer === ridlle["correctAnswer"]) {
    console.log("Correct :)");
    gameStatistics["correctAnswers"] += 1;
    const stopTimer = Math.floor((Date.now() - statTimer) / 1000);
    gameStatistics["timer"] += stopTimer;
  } else {
    console.log("Sorry, that's incorrect :(");
    gameStatistics["wrongAnswers"] += 1;
    const stopTimer = Math.floor((Date.now() - statTimer) / 1000);
    gameStatistics["timer"] += stopTimer;
  }
}
