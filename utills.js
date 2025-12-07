import input from "analiza-sync";

export const gameStatistics = {
  correctAnswers: 0,
  wrongAnswers: 0,
  timer: 0,
  timeAverage: 0,
};

export function addSloveTime(player, seconds) {
  player["times"].push(seconds);
}

export function askRidlle(ridlle) {
  const answer = input(
    `${ridlle["taskDescription"]} \n${ridlle["choices"]} \n`
  );
  if (answer === ridlle["correctAnswer"]) {
    console.log("Correct :)");
    gameStatistics["correctAnswers"] += 1;
  } else {
    console.log("Sorry, that's incorrect :(");
    gameStatistics["wrongAnswers"] += 1;
  }
}

export function showStatus() {
  const average =
    gameStatistics["timer"] /
    (gameStatistics["correctAnswers"] + gameStatistics["wrongAnswers"]);
  gameStatistics["timeAverage"] += average;
  console.log(gameStatistics);
}

export function measureSolveTime(fn) {
  const statTimer = Date.now();
  fn();
  const stopTimer = Math.floor((Date.now() - statTimer) / 1000);
  return stopTimer;
}
