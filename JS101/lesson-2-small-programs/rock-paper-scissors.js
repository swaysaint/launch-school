const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const WIN_TABLE = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['rock', 'scissors'],
  lizard: ['paper', 'lizard'],
};

function prompt(message) {
  console.log(`=> ${message}`);
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

prompt("Let's play rock, paper, scissors!");

if (checkUseSpockLizard()) {
  engageSpockLizard();
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  let winner = checkWinner(choice, computerChoice);
  announceWinner(winner);

  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
}