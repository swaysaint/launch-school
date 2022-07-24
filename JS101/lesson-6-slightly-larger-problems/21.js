const readline = require('readline-sync');
const COLOR = require('cli-color');

const GAME_TYPE = 21; // Can be changed to play 31, 41, 51, etc.
const DEALER_STAY_ON = GAME_TYPE - 4;
const SPADE_ICON = '\u2660';
const HEART_ICON = '\u2665';
const DIAMOND_ICON = '\u2666';
const CLUB_ICON = '\u2663';

function prompt(message) {
  console.log(`=> ${message}`);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function initializeDeck() {
  return [
    ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'], ['H', '7'],
    ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J'], ['H', 'Q'], ['H', 'K'],
    ['H', 'A'],
    ['D', '2'], ['D', '3'], ['D', '4'], ['D', '5'], ['D', '6'], ['D', '7'],
    ['D', '8'], ['D', '9'], ['D', '10'], ['D', 'J'], ['D', 'Q'], ['D', 'K'],
    ['D', 'A'],
    ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'], ['C', '6'], ['C', '7'],
    ['C', '8'], ['C', '9'], ['C', '10'], ['C', 'J'], ['C', 'Q'], ['C', 'K'],
    ['C', 'A'],
    ['S', '2'], ['S', '3'], ['S', '4'], ['S', '5'], ['S', '6'], ['S', '7'],
    ['S', '8'], ['S', '9'], ['S', '10'], ['S', 'J'], ['S', 'Q'], ['S', 'K'],
    ['S', 'A'],
  ];
}

function shuffleDeck(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }
}

function welcome() {
  console.clear();
  console.log('******************************');
  console.log(`*** Welcome to Simple ${GAME_TYPE}!! ***`);
  console.log('******************************');
  prompt('Press any key to begin');
  readline.question();
}

function dealNewHand(deck) {
  let hand = [];
  hand.push(deck.shift());
  hand.push(deck.shift());
  return hand;
}

function dealCard(deck, hand) {
  hand.push(deck.shift());
}

function getSuitIcon(card) {
  switch (card[0]) {
    case 'H':
      return HEART_ICON;
    case 'D':
      return DIAMOND_ICON;
    case 'S':
      return SPADE_ICON;
    case 'C':
      return CLUB_ICON;
    default:
      return '?';
  }
}

function getCardColor(card) {
  if (card[0] === 'H' || card[0] === 'D') {
    return 'redBright';
  } else {
    return 'cyanBright';
  }
}

function isTenSpace(card) {
  if (card[1] === '10' || card[1] === '11') {
    return '';
  } else {
    return '  ';
  }
}


function getNonAceCardValue(card) {
  if (card[1] === 'J' || card[1] === 'Q' || card[1] === 'K') {
    return 10;
  } else {
    return Number(card[1]);
  }
}

// Shouldn't need this but getHandValue is not working with only card
// Which causes a problem on line 175
function getSimpleCardValue(card) {
  if (card[1] === 'J' || card[1] === 'Q' || card[1] === 'K') {
    return 10;
  } else if (card[1] === 'A') {
    return 11;
  } else return Number(card[1]);
}

function getHandValue(hand) {
  let handValue = 0;
  let nonAces = hand.filter(card => card[1] !== 'A');
  let aces = hand.filter(card => card[1] === 'A');
  for (let card of nonAces) {
    handValue += getNonAceCardValue(card);
  }
  if (aces.length > 0) {
    for (let index = 0; index < aces.length; index++) {
      handValue += 1;
    }
    for (let index = 0; index < aces.length; index++) {
      if (handValue + 10 <= GAME_TYPE) {
        handValue += 10;
      }
    }
  }
  return handValue;
}

function lineStartPadding() {
  return '&                  ';
}

function lineEndPadding() {
  return '                  &';
}

function displayOpenCards(card1, card2) {
  let card1Color = getCardColor(card1);
  let card2Color = getCardColor(card2);
  console.log(lineStartPadding() + COLOR[card1Color]('*************') + '  ' + COLOR[card2Color]('*************') + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color](`* ${card1[1]}     `) + isTenSpace(card1) + COLOR[card1Color](`${card1[1]} *`) + '  ' + COLOR[card2Color](`* ${card2[1]}     `) + isTenSpace(card2) + COLOR[card2Color](`${card2[1]} *`) + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color]('*           *') + '  ' + COLOR[card2Color]('*           *') + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color]('*           *') + '  ' + COLOR[card2Color]('*           *') + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color](`*     ${getSuitIcon(card1)}     *`) + COLOR[card2Color](`  *     ${getSuitIcon(card2)}     *`) + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color]('*           *') + '  ' + COLOR[card2Color]('*           *') + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color]('*           *') + '  ' + COLOR[card2Color]('*           *') + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color](`* ${card1[1]}     `) + isTenSpace(card1) + COLOR[card1Color](`${card1[1]} *`) + '  ' + COLOR[card2Color](`* ${card2[1]}     `) + isTenSpace(card2) + COLOR[card2Color](`${card2[1]} *`) + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color]('*************') + '  ' + COLOR[card2Color]('*************') + lineEndPadding());
}

function displayOpenClosedCards(card) {
  let card1Color = getCardColor(card);
  console.log(lineStartPadding() + COLOR[card1Color]('*************') + '  ' + COLOR['greenBright']('*************') + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color](`* ${card[1]}     `) + isTenSpace(card) + COLOR[card1Color](`${card[1]} *`) + '  ' + COLOR['greenBright'](`* ?       ? *`) + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color]('*           *') + '  ' + COLOR['greenBright']('*     *     *') + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color]('*           *') + '  ' + COLOR['greenBright']('*    * *    *') + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color](`*     ${getSuitIcon(card)}     *`) + COLOR['greenBright'](`  *   *   *   *`) + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color]('*           *') + '  ' + COLOR['greenBright']('*    * *    *') + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color]('*           *') + '  ' + COLOR['greenBright']('*     *     *') + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color](`* ${card[1]}     `) + isTenSpace(card) + COLOR[card1Color](`${card[1]} *`) + '  ' + COLOR['greenBright'](`* ?       ? *`) + lineEndPadding());
  console.log(lineStartPadding() + COLOR[card1Color]('*************') + '  ' + COLOR['greenBright']('*************') + lineEndPadding());
}

function displayClosedTable(playerHand, dealerHand) {
  console.clear();
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
  console.log(`&                          WELCOME TO ${GAME_TYPE}                         &`);
  console.log('&                                                                &');
  console.log(`&                          Dealer Has ${getSimpleCardValue(dealerHand[0])}` + `${getSimpleCardValue(dealerHand[0]) >= 10 ? '' : ' '}` + '                         &');
  displayOpenClosedCards(dealerHand[0]);
  console.log('&                                                                &');
  console.log('&                                                                &');
  console.log(`&                           You Have ${getHandValue(playerHand)}` + `${getHandValue(playerHand) >= 10 ? '' : ' '}` + '                          &');
  displayOpenCards(playerHand[0], playerHand[1]);
  console.log('&                                                                &');
  console.log('&                                                                &');
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
}

function buildHoleCard(card) {
  return [
    COLOR['greenBright']('*************'),
    COLOR['greenBright'](`* ?     ` + isTenSpace(card) + `? *`),
    COLOR['greenBright']('*     *     *'),
    COLOR['greenBright']('*    * *    *'),
    COLOR['greenBright'](`*   * * *   *`),
    COLOR['greenBright']('*    * *    *'),
    COLOR['greenBright']('*     *     *'),
    COLOR['greenBright'](`* ?     ` + isTenSpace(card) + `? *`),
    COLOR['greenBright']('*************')
  ];
}

function buildCard(card, closed = false) {
  let color = getCardColor(card);
  if (closed) {
    return buildHoleCard(card);
  } else return [
    COLOR[color]('*************'),
    COLOR[color](`* ${card[1]}     ` + isTenSpace(card) + `${card[1]} *`),
    COLOR[color]('*           *'),
    COLOR[color]('*           *'),
    COLOR[color](`*     ${getSuitIcon(card)}     *`),
    COLOR[color]('*           *'),
    COLOR[color]('*           *'),
    COLOR[color](`* ${card[1]}     ` + isTenSpace(card) + `${card[1]} *`),
    COLOR[color]('*************')
  ];
}

// This function is ugly
function printHand(hand) {
  let visualCards = hand.map(card => buildCard(card));
  let cardLines = [];
  for (let row = 0; row < visualCards[0].length; row++) {
    cardLines[row] = '';
  }
  for (let card = 0; card < visualCards.length; card++) {
    for (let row = 0; row < visualCards[card].length; row++) {
      cardLines[row] += visualCards[card][row] + '  ';
    }
  }
  for (let row = 0; row < cardLines.length; row++) {
    console.log(cardLines[row].trimEnd());
  }
}

function checkMove() {
  prompt('Would you like to (h)it or (s)tand?');
  let response = readline.question().toLowerCase();
  while (true) {
    if (response === 'h' || response === 's') break;
    prompt("Please enter 'h' to hit or 's' to stand");
    response = readline.question().toLowerCase();
  }
  return response;
}

function checkBust(hand) {
  return getHandValue(hand) > GAME_TYPE;
}

function checkBlackJack(hand) {
  return getHandValue(hand) === GAME_TYPE;
}

function check17(hand) {
  return getHandValue(hand) >= DEALER_STAY_ON;
}

function hit(deck, hand) {
  dealCard(deck, hand);
  console.log(getHandValue(hand));
}

function stand(hand) {
  console.log(getHandValue(hand));
}

function playerMove(deck, hand, dealerHand) {
  while (!checkBust(hand) && !checkBlackJack(hand)) {
    console.log('Your Hand:');
    printHand(hand);
    console.log(`You have ${getHandValue(hand)}, the dealer has ${getSimpleCardValue(dealerHand[0])}`);
    let move = checkMove();
    sleep(2000);
    if (move === 'h') hit(deck, hand);
    else {
      stand(hand);
      break;
    }
  }
  printHand(hand);
  if (checkBust(hand)) console.log('Bust!');
  if (checkBlackJack(hand)) console.log('Blackjack!');
  return hand;
}

function dealerMove(deck, hand) {
  while (!checkBust(hand) && !checkBlackJack(hand) && !check17(hand)) {
    console.log("Dealer's Hand:");
    printHand(hand);
    console.log(`Dealer has ${getHandValue(hand)}`);
    if (getHandValue(hand) === GAME_TYPE) console.log('Dealer Blackjack!');
    else if (getHandValue(hand) >= DEALER_STAY_ON) console.log(`Dealer has ${getHandValue(hand)}`);
    else {
      sleep(2000);
      dealCard(deck, hand);
    }
  }
  printHand(hand);
  if (checkBust(hand)) console.log('Dealer Busted!');
  else if (checkBlackJack(hand)) console.log('Dealer Blackjack!');
  else console.log(`Dealer stands on ${getHandValue(hand)}`);
  return hand;
}

function checkWinner(playerHand, dealerHand) {
  let playerScore = getHandValue(playerHand);
  let dealerScore = getHandValue(dealerHand);
  if (!checkBust(playerHand) && playerScore > dealerScore) {
    return 'Player';
  } else if (checkBust(dealerHand)) {
    return 'Player';
  } else if (playerScore === dealerScore) {
    return 'Push';
  } else {
    return 'Dealer';
  }

}

function announceWinner(playerHand, dealerHand, winner) {
  let playerScore = getHandValue(playerHand);
  let dealerScore = getHandValue(dealerHand);
  console.log(`Player score is ${playerScore}`);
  console.log(`Dealer score is ${dealerScore}`);
  console.log('******************************');
  if (winner === 'Push') {
    console.log('Push!');
  } else {
    console.log(`${winner} wins!!!`);
  }
  console.log('******************************');
}

function playHand(deck) {
  let [ playerHand, dealerHand ] = [ dealNewHand(deck), dealNewHand(deck) ];
  displayClosedTable(playerHand, dealerHand);
  if (checkBlackJack(playerHand)) {
    console.log('Blackjack! You Win!');
  } else {
    sleep(3000);
    console.clear();
    console.log('Your turn...');
    sleep(3000);
    playerMove(deck, playerHand, dealerHand);
  }
  if (!checkBust(playerHand)) {
    console.clear();
    console.log("Dealer's turn...");
    sleep(2000);
    dealerMove(deck, dealerHand);
  }
  announceWinner(playerHand, dealerHand, checkWinner(playerHand, dealerHand));
}

function playAgain() {
  prompt("Do you want to play again? (y)es or (n)o?");
  let response = readline.question().toLowerCase();
  while (true) {
    if (response === 'y' || response === 'n') break;
    response = readline.question().toLowerCase();
  }
  return response === 'y';
}

function blackJack() {
  while (true) {
    welcome();
    let deck = initializeDeck();
    shuffleDeck(deck);
    playHand(deck);
    if (!playAgain()) break;
  }
}

blackJack();