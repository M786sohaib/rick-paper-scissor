// Rules of the game -
// Rock beats scissors, scissors beat paper, and paper beats rock.

// Algorythm of the game -
// (1) The game will consist of three choices; rock, paper, and scissors.
// (2) The computer will randomly choose either value at the start of the Game.
// (3) The user will be asked to make a choice.
// (4) Based on the rules of the game above, a winner will be displayed.
console.log("Hello world!");

//pseudocode -

// (1) Create a fucntion that randomly returns either rock paper or scissors as strings.
const allChoices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const result = Math.floor(Math.random() * allChoices.length);
  return allChoices[result];
}
// console.log(getComputerChoice());

// (2) Write the logic to get the human choice.
//Create a new function that take input of the human choice and returns it.

function getHumanChoice() {
  const inputChoice = prompt(
    "Make your selection between rock, paper, and scissors",
    ""
  );
  return inputChoice;
}

//Create two variables that store the choices of both human and computer and initialize them with value 0.
// let humanChoice = getHumanChoice;
let humanChoice = "paper";

let computerChoice = getComputerChoice();

// console.log(computerChoice);

// (3) Create a logic for the game to be played round-by-round.
//Create a function for the gameplay round with two paramenter set as the choices made by human and computer.
function playRound() {
  if (!allChoices.includes(humanChoice)) {
    return "Invalid choice! Please enter 'rock', 'paper', or 'scissors'.";
  }
  if (computerChoice === humanChoice) {
    return "It's a tie!";
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    return "You've won!";
  } else {
    return "You've lost!";
  }
}
console.log(playRound());
//Make the human choice argument (parameter) as case insensitive.
humanChoice = humanChoice.toLowerCase();
// console.log(humanChoice);
//Console log the result of the round with a string such as "You lost or You won!"
// console.log(playRound());

//Increment the human score or computer score based on the result of the round.

console.log();
// (4) Write the logic for the game to played in total of 5 rounds.
//Create the main function for the entire game of 5 rounds.
console.log();
//Declare the score variables and game play round fuction inside of the main function.
console.log();
//create the logic so that game play round function is called 5 times for a game to complete.
console.log();
