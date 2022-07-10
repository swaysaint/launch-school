// Tic-tac-toe by @sway
// Jul 11, 2022

const readline = require('readline-sync');

const BLANK_SQUARE = ' ';
const PLAYER_SQUARE = 'X';
const COMPUTER_SQUARE = 'O';
const WINNING_LINES = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9'],
  ['1', '5', '9'],
  ['3', '5', '7'],
];
const GAMES_NEEDED_TO_WIN = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}

function welcome() {
  console.clear();
  console.log('******************************');
  console.log('*** Welcome to Tic-Tac-Toe ***');
  console.log('******************************');
  prompt('Press any key to begin');
  readline.question();
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = BLANK_SQUARE;
  }
  return board;
}

function displayBoard(board, message = '') {
  console.clear();
  console.log(`You are ${PLAYER_SQUARE}. Computer is ${COMPUTER_SQUARE}`);
  console.log(message);
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
}

function checkMove(board, move) {
  return board[move] !== BLANK_SQUARE;
}

function chooseRow() {
  const validRows = ['1', '2', '3'];
  prompt('Please enter the row (1, 2, or 3):');
  let row = readline.question().trim();
  while (!validRows.includes(row)) {
    prompt('Invalid row. Please enter either 1 (top), 2 (middle), or 3 (bottom):');
    row = readline.question().trim();
  }
  return row;
}

function chooseCol() {
  const validCols = ['1', '2', '3'];
  prompt('Please enter the column (1, 2, or 3):');
  let col = readline.question().trim();
  while (!validCols.includes(col)) {
    prompt('Invalid column. Please enter either 1 (left), 2 (middle), or 3 (right):');
    col = readline.question().trim();
  }
  return col;
}

function choiceToSquare(row, col) {
  if (row === '1') {
    return String(col);
  } else if (row === '2') {
    return String(Number(col) + 3);
  } else {
    return String(Number(col) + 6);
  }
}

function chooseRandomSquare(board) {
  let validSquares = Object.keys(board)
    .filter(key => board[key] === BLANK_SQUARE);
  let randomIndex = Math.floor(Math.random() * validSquares.length);
  return String(validSquares[randomIndex]);
}

function getPlayerPositions(board) {
  return Object.keys(board).filter(key => board[key] === PLAYER_SQUARE);
}

function getComputerPositions(board) {
  return Object.keys(board).filter(key => board[key] === COMPUTER_SQUARE);
}

function playerChoice(board) {
  let playerSquare;
  let attempt = 1;
  do {
    let message = '';
    if (attempt === 1) {
      message = "Player's turn:";
    } else {
      message = "Invalid move! Try again!";
    }
    displayBoard(board, message);
    let playerChoice = {row: chooseRow(), col: chooseCol()};
    playerSquare = choiceToSquare(playerChoice.row, playerChoice.col);
    attempt++;
  } while (checkMove(board, playerSquare));
  board[playerSquare] = PLAYER_SQUARE;
}

function findLineBlocker(board, line) {
  let [ sq1, sq2, sq3 ] = [ line[0], line[1], line[2] ];
  if (board[sq1] === PLAYER_SQUARE && board[sq2] === PLAYER_SQUARE &&
      board[sq3] === BLANK_SQUARE
  ) {
    return sq3;
  } else if (
    board[sq1] === PLAYER_SQUARE && board[sq2] === BLANK_SQUARE &&
      board[sq3] === PLAYER_SQUARE
  ) {
    return sq2;
  } else if (
    board[sq1] === BLANK_SQUARE && board[sq2] === PLAYER_SQUARE &&
      board[sq3] === PLAYER_SQUARE
  ) {
    return sq1;
  }
  return null;
}

function findLineWinner(board, line) {
  let [ sq1, sq2,  sq3] = [ line[0], line[1], line[2] ];
  if (board[sq1] === COMPUTER_SQUARE && board[sq2] === COMPUTER_SQUARE &&
      board[sq3] === BLANK_SQUARE
  ) {
    return sq3;
  } else if (
    board[sq1] === COMPUTER_SQUARE && board[sq2] === BLANK_SQUARE &&
    board[sq3] === COMPUTER_SQUARE
  ) {
    return sq2;
  } else if (
    board[sq1] === BLANK_SQUARE && board[sq2] === COMPUTER_SQUARE &&
    board[sq3] === COMPUTER_SQUARE
  ) {
    return sq1;
  }
  return null;
}

function checkImminentLosses(board) {
  let playerPositions = getPlayerPositions(board);
  let computerPositions = getComputerPositions(board);
  let imminentLosses = [];
  WINNING_LINES.forEach(line => {
    if (
      (playerPositions.filter(square => line.includes(square)).length === 2) &&
      (computerPositions.filter(square => line.includes(square)).length === 0)
    ) {
      imminentLosses.push(findLineBlocker(board, line));
    }
  });
  return imminentLosses;
}

function checkImminentWins(board) {
  let playerPositions = getPlayerPositions(board);
  let computerPositions = getComputerPositions(board);
  let imminentWins = [];
  WINNING_LINES.forEach(line => {
    if (
      (computerPositions
        .filter(square => line.includes(square)).length === 2) &&
      (playerPositions
        .filter(square => line.includes(square)).length === 0)
    ) {
      imminentWins.push(findLineWinner(board, line));
    }
  });
  return imminentWins;
}

function computerDefense(board) {
  let imminentLosses = checkImminentLosses(board);
  let randomIndex = Math.floor(Math.random() * imminentLosses.length);
  if (imminentLosses.length > 0) {
    return { move: true, square: imminentLosses[randomIndex] };
  } else {
    return { move: false };
  }
}

function computerOffense(board) {
  let imminentWins = checkImminentWins(board);
  let randomIndex = Math.floor(Math.random() * imminentWins.length);
  if (imminentWins.length > 0) {
    return { move: true, square: imminentWins[randomIndex] };
  } else {
    return { move: false };
  }
}

function computerChoice(board) {
  let computerSquare;
  let aiOffense = computerOffense(board);
  let aiDefense = computerDefense(board);
  if (aiOffense.move === true) {
    computerSquare = aiOffense.square;
  } else if (aiOffense.move === false && aiDefense.move === true) {
    computerSquare = aiDefense.square;
  } else if (aiOffense. move === false && aiDefense.move === false &&
    board['5'] === BLANK_SQUARE
  ) {
    computerSquare = '5';
  } else {
    computerSquare = chooseRandomSquare(board);
  }
  board[computerSquare] = COMPUTER_SQUARE;
}

function checkForWinner(board) {
  let winner = 'none';
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
    if (
      board[sq1] === PLAYER_SQUARE &&
      board[sq2] === PLAYER_SQUARE &&
      board[sq3] === PLAYER_SQUARE
    ) {
      winner = 'player';
    } else if (
      board[sq1] === COMPUTER_SQUARE &&
      board[sq2] === COMPUTER_SQUARE &&
      board[sq3] === COMPUTER_SQUARE
    ) {
      winner = 'computer';
    }
  }
  return winner;
}

function checkForTie(board) {
  return Object.keys(board).every(square => board[square] !== BLANK_SQUARE);
}

function announceWinner(winner) {
  if (winner === 'player' || winner === 'computer') {
    console.log(`***** ${winner.toUpperCase()} WINS!!!! *****`);
  } else {
    console.log("IT'S A TIE!!!");
  }
}

function checkContinueGame() {
  prompt("Do you want to play again? 1) Yes, 2) No");
  let goAgain = String(readline.question());
  while (goAgain !== '1' && goAgain !== '2') {
    prompt("Invalid input. Please enter 1 to play again, or 2 to quit:");
    goAgain = String(readline.question());
  }
  return goAgain === '1';
}

function playGame() {
  welcome();
  let board = initializeBoard();
  while (true) {
    playerChoice(board);
    if (checkForWinner(board) !== 'none' || checkForTie(board)) break;
    computerChoice(board);
    if (checkForWinner(board) !== 'none' || checkForTie(board)) break;
  }
  let winner = checkForWinner(board);
  displayBoard(board, 'Game Over');
  announceWinner(winner);
  return winner;
}

function ticTacToe() {
  let score = { player: 0, computer: 0};
  do {
    score[playGame()] += 1;
    if (score.player >= GAMES_NEEDED_TO_WIN ||
      score.computer >= GAMES_NEEDED_TO_WIN) {
      console.log('Match Over! The final score is:');
      console.log(`Player: ${score.player}, Computer: ${score.computer}`);
      score.player = 0;
      score.computer = 0;
      console.log('Score reset!!!');
      console.log('');
    }
    console.log(`Player score: ${score.player}. Computer score: ${score.computer}`);
    console.log(' ');
  } while (checkContinueGame());
  console.log('Thanks for playing Tic-Tac-Toe!');
}

ticTacToe();