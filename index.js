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

function playGame() {
  const allChoices = ["rock", "paper", "scissors"];

  function getComputerChoice() {
    const result = Math.floor(Math.random() * allChoices.length);
    return allChoices[result];
  }

  function getHumanChoice() {
    const inputChoice = prompt(
      "Make your selection between rock, paper, and scissors",
      ""
    );
    if (inputChoice === null) {
      alert("Game cancelled.");
      return null;
    }
    const formattedChoice = inputChoice.trim().toLowerCase();

    if (!allChoices.includes(formattedChoice)) {
      alert("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
      return getHumanChoice(); // Ask again
    }

    return formattedChoice;
  }

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if (computerChoice === humanChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log("You've won this round!");
    } else {
      computerScore++;
      console.log("You've lost this round!");
    }

    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);

    if (humanScore < 3 && computerScore < 3) {
      playGameRound();
    } else if (humanScore === 3) {
      console.log("Congratulations! You won the game!");
    } else {
      console.log("You lost the game. Better luck next time!");
    }
  }

  function playGameRound() {
    const humanSelection = getHumanChoice();
    if (humanSelection === null) return; // Stop if user cancels
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  playGameRound();
}

playGame();

// console.log(computerScore);
// console.log(humanScore);
// console.log(computerSelection);
// console.log(humanSelection);

// if (humanScore === computerScore) {
//   return console.log("It's a tie! Up for another game?");
// } else if (humanScore > computerScore) {
//   return console.log("Congratulations! You are the winner!");
// } else {
//   return console.log("You lost. Better luck next time.");
// }

console.log();
//Declare the score variables and game play round fuction inside of the main function.
console.log();
//create the logic so that game play round function is called 5 times for a game to complete.
console.log();
