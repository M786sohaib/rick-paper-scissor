// Rules of the game -
// Rock beats scissors, scissors beat paper, and paper beats rock.

// Algorythm of the game -
// (1) The game will consist of three choices; rock, paper, and scissors.
// (2) The computer will randomly choose either value at the start of the Game.
// (3) The user will be asked to make a choice.
// (4) Based on the rules of the game above, a winner will be displayed.
console.log("Welcome to Rock, Paper, and Scissors Game!");

//pseudocode -

// (1) Create a fucntion that randomly returns either rock paper or scissors as strings.

// console.log(getComputerChoice());

// (2) Write the logic to get the human choice.
//Create a new function that take input of the human choice and returns it.

//Create two variables that store the choices of both human and computer and initialize them with value 0.

// console.log(computerChoice);

// (3) Create a logic for the game to be played round-by-round.
//Create a function for the gameplay round with two paramenter set as the choices made by human and computer.

//Make the human choice argument (parameter) as case insensitive.
// humanChoice = humanChoice.toLowerCase();
// console.log(humanChoice);
//Console log the result of the round with a string such as "You lost or You won!"
// console.log(playRound());

//Increment the human score or computer score based on the result of the round.

// (4) Write the logic for the game to played in total of 5 rounds.
//Create the main function for the entire game of 5 rounds.

const allChoices = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("button");
const runningScore = document.querySelector(".runningScore");
const finalScore = document.querySelector(".finalResult");
const container = document.querySelector(".container");
const restart = document.createElement("button");
restart.textContent = "Start Over?";

let humanScore = 0;
let computerScore = 0;

// Attach event listener once
restart.addEventListener("click", enableButtons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  });
});

function getComputerChoice() {
  return allChoices[Math.floor(Math.random() * allChoices.length)];
}

function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (computerChoice === humanChoice) {
    runningScore.textContent = `It's a tie! You chose ${humanChoice}, computer chose ${computerChoice}. Player score: ${humanScore}, Computer score: ${computerScore}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    runningScore.textContent = `You've won this round! You chose ${humanChoice}, computer chose ${computerChoice}. Player score: ${humanScore}, Computer score: ${computerScore}.`;
  } else {
    computerScore++;
    runningScore.textContent = `You've lost this round! You chose ${humanChoice}, computer chose ${computerChoice}. Player score: ${humanScore}, Computer score: ${computerScore}.`;
  }

  if (humanScore === 3 || computerScore === 3) {
    finalScore.textContent =
      humanScore === 3
        ? "Congratulations! You won the game!"
        : "You lost the game. Better luck next time!";
    disableButtons();
    if (!container.contains(restart)) container.appendChild(restart);
  }
}

function disableButtons() {
  buttons.forEach((button) => button.setAttribute("disabled", true));
}

function enableButtons() {
  buttons.forEach((button) => button.removeAttribute("disabled"));
  humanScore = 0;
  computerScore = 0;
  finalScore.textContent = "";
  runningScore.textContent = "";
  if (container.contains(restart)) container.removeChild(restart);
}
