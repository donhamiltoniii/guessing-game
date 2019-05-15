const input = require("readline-sync");
const GuessingGame = require("./guessing-game");

const gameInstance = new GuessingGame();

let turns = 0;
let gameRunning = true;

while (gameRunning && turns < 3) {
  const userResponse = input.question(
    "Please guess a number between 1 and 10: "
  );

  if (gameInstance.guess(userResponse)) {
    console.log("Congratulations! You win!");
    gameRunning = false;
  } else {
    console.log("You guessed wrong. Please try again");
  }
  turns++;
}

if (turns === 3) {
  console.log("Too many tries... you lose");
}
