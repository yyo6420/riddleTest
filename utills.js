import { player } from "./player.js";
import { riddles } from "./allRilddles.js";
import input from "analiza-sync";

function createPlayer() {
  const playerName = input(
    "Hello and welcome to our Trivia Riddles Game\nlet's get started\nwhat is your mane? "
  );
  player["name"] = playerName;
}

const gameStatistics = {
  correctAnswers: 0,
  wrongAnswers: 0,
  timer: 0,
  timeAverage: 0,
};



function askRidlle(ridlle) {
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

function showStatus() {
  const average =
    gameStatistics["timer"] /
    (gameStatistics["correctAnswers"] + gameStatistics["wrongAnswers"]);
  gameStatistics["timeAverage"] += average;
  console.log(gameStatistics);
}

