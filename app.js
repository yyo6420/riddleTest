import input from "analiza-sync";
import { riddles } from "./allRilddles.js";
import { addSloveTime } from "./utills.js";
import { askRidlle } from "./utills.js";
import { showStatus } from "./utills.js";
import { createPlayer } from "./player.js";

function gameFlow() {
  const askForName = input(
    "Hello and welcome to our Trivia Riddles Game\nlet's get started\nwhat is your mane? "
  );
  console.log("To answer a question, you must choose a number from 1 to 4")
  const player1 = createPlayer(askForName);
  addSloveTime(
    player1,
    riddles.forEach((riddle) => {
      askRidlle(riddle);
    })
  );
  showStatus()
}

gameFlow()