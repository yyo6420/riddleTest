import input from "analiza-sync";
import { riddles } from "./allRilddles.js";
import { gameStatistics } from "./utills.js";
import { createPlayer } from "./utills.js";
import { addSloveTime } from "./utills.js";
import { askRidlle } from "./utills.js";
import { showStatus } from "./utills.js";
import { playerdetails } from "./player.js";

function gameFlow() {
  const askForName = input(
    "Hello and welcome to our Trivia Riddles Game\nlet's get started\nwhat is your mane? "
  );
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