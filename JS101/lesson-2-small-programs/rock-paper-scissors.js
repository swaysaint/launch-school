const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors']; //If spock and Lizard are activated will include 'spock' and 'lizard'
const WIN_TABLE = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['rock', 'scissors'],
  lizard: ['paper', 'lizard'],
};
let score = [0,0];
let spockLizardEngaged = false;
let playBestOfFive = false;

function prompt(message) {
  console.log(`=> ${message}`);
}

function welcomePlayer() {
  prompt('**********************************');
  prompt("Let's play rock, paper, scissors!");
  prompt('**********************************');
}

function checkUseSpockLizard() {
  prompt("Play with 'spock' and 'lizard'? (y/n)");
  let useSpockLizard = readline.question().toLowerCase();
  while (useSpockLizard[0] !== 'y' && useSpockLizard[0] !== 'n') {
    prompt("Please enter 'y' or 'n'.");
    useSpockLizard = readline.question().toLowerCase();
  }
  return useSpockLizard === 'y';
}

function engageSpockLizard() {
  VALID_CHOICES.push('spock');
  VALID_CHOICES.push('lizard');
  spockLizardEngaged = true;
}

function checkPlayBestOfFive() {
  prompt("Free Play or Best of 5?\n1) Free Play 2) Best of 5");
  let gameMode = readline.question().toString();
  while (gameMode !== '1' && gameMode !== '2') {
    prompt("Invalid game mode. Please enter '1' or '2'.");
    gameMode = readline.question();
  }
  return gameMode === '2';
}

function engageBestOfFive() {
  playBestOfFive = true;
}

function initializeGameSettings() {
  if (checkUseSpockLizard()) {
    engageSpockLizard();
  }

  if (checkPlayBestOfFive()) {
    engageBestOfFive();
  }
}

function getChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  if (spockLizardEngaged) {
    prompt("Enter the full word or first letter (use 'k' for spock)");
  } else {
    prompt("Enter the full word or first letter");
  }
  return readline.question().toLowerCase();
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function convertChoiceInput(choice) {
  switch (choice) {
    case 'r': case 'rock':
      choice = 'rock';
      break;
    case 'p': case 'paper':
      choice = 'paper';
      break;
    case 's': case 'scissors':
      choice = 'scissors';
      break;
    case 'k': case 'spock':
      choice = 'spock';
      break;
    case 'l': case 'lizard':
      choice = 'lizard';
      break;
  }
  return choice;
}

function validateChoice(choice) {
  choice = convertChoiceInput(choice);
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = convertChoiceInput(readline.question());
  }
  return choice;
}

function checkWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return 'tie';
  } else if (WIN_TABLE[choice].includes(computerChoice)) {
    return 'player';
  } else {
    return 'computer';
  }
}

function announceWinner(winnerName) {
  if (winnerName === 'player') {
    prompt("You win!");
  } else if (winnerName === 'computer') {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie!");
  }
}

function updateScore(winner) {
  if (winner === 'player') {
    score[0] += 1;
  } else if (winner === 'computer') {
    score[1] += 1;
  }
}

function checkForWinner() {
  return score[0] >= 3 || score[1] >= 3;
}

function declareWinner() {
  if (score[0] > score[1]) {
    prompt('Player Wins!');
  } else {
    prompt('Computer Wins!');
  }
}

function checkPlayAgain() {
  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }
  return answer === 'y';
}

welcomePlayer();
initializeGameSettings();

let endGame;
while (!endGame) {
  let choice = getChoice();
  choice = validateChoice(choice);
  let computerChoice = getComputerChoice();
  prompt('**********************************');
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  let winner = checkWinner(choice, computerChoice);
  announceWinner(winner);
  prompt('**********************************');
  updateScore(winner);
  prompt(`The score is currently: Player ${score[0]}, Computer ${score[1]}`);
  if (playBestOfFive) {
    if (checkForWinner()) {
      declareWinner();
      endGame = true;
    }
  } else if (!checkPlayAgain()) {
    endGame = true;
  }
}