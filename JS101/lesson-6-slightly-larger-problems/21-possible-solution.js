const rlSync = require('readline-sync');
const CARDS = {
  Hearts: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  Spades: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  Diamonds: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  Clubs: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
};
const CURRENT_PLAYER = ['player']; // default setting is player is current player
const SHUFFLED_CARDS = [];
const DEALER_CARDS = [];
const PLAYER_CARDS = [];
const BEST_OF_FIVE = 4;
const DEALER_WINS = [0];
const PLAYER_WINS = [0];
const PUSH_OR_BUST = [0];

// greet user to game
function greeting() {
  console.clear();
  console.log('*****************************');
  console.log('*** Welcome to Twenty-One ***');
  console.log('*****************************');
  console.log('');
}

// ask for game type
function gameType() {
  console.log('Play best-of-five? (Y/no)');
  let answer = rlSync.prompt().toLowerCase();

  while (!['yes', 'y', 'no', 'n'].includes(answer)) {
    console.log('Invalid Input');
    console.log('Play best-of-five? (Y/no)');
    answer = rlSync.prompt().toLowerCase();
  }

  if (['yes', 'y'].includes(answer)) {
    return 'best-of-five';
  } else {
    return 'single';
  }
}

// compare two arrays return true if they contain the same same values
function arraysEqual(arr1, arr2) {
  return arr1.every((el, idx) => el === arr2[idx]);
}

// check for duplicates in the shuffled cards array
function shuffledCardsContainDuplicates(shuffledCardsArr, randCard) {
  return shuffledCardsArr.some(el => arraysEqual(el, randCard));
}

// add a cards to the shuffled cards array
function addCardToShuffledDeck(totalCards, suits) {
  for (totalCards; totalCards > 0; --totalCards) {
    let totalCardSuits = suits.length;
    let randomSuitIdx = Math.floor(Math.random() * totalCardSuits);
    let randomSuit = suits[randomSuitIdx];
    let totalCardsInSuit = CARDS[randomSuit].length;
    let randomCardValIdx = Math.floor(Math.random() * totalCardsInSuit);
    let randomCardVal = CARDS[randomSuit][randomCardValIdx];
    let randomCard = [randomSuit, randomCardVal];

    while (shuffledCardsContainDuplicates(SHUFFLED_CARDS, randomCard)) {
      randomSuitIdx = Math.floor(Math.random() * totalCardSuits);
      randomSuit = suits[randomSuitIdx];
      randomCardValIdx = Math.floor(Math.random() * totalCardsInSuit);
      randomCardVal = CARDS[randomSuit][randomCardValIdx];

      randomCard = [randomSuit, randomCardVal];
    }

    SHUFFLED_CARDS.push(randomCard);
  }
}

// create a new shuffled deck of 52 cards
function shuffle(obj) {
  let suits = Object.keys(obj);
  let cardValues = Object.values(obj);
  let totalCards = cardValues.map(el => el.length)
    .reduce((accu, cur) => accu + cur, 0);

  addCardToShuffledDeck(totalCards, suits);
}

// determine initial card hands
function initalDealing(shuffledCards) {
  let counter = 0;
  while (counter < 2) {
    DEALER_CARDS.push(shuffledCards.shift());
    PLAYER_CARDS.push(shuffledCards.shift());
    counter++;
  }

  console.clear();
  displayHands(DEALER_CARDS, PLAYER_CARDS);
}

// calculate the card values and return the total
function calculateHandTotal(cards) {
  let cardVals = cards.map(el => el[1]);
  let total = 0;

  cardVals.forEach(val => {
    if (['Jack', 'Queen', 'King'].includes(val)) {
      total += 10;
    } else if (val === 'Ace') {
      total += 11;
    } else {
      total += Number(val);
    }
  });

  cardVals.filter(val => val === 'Ace').forEach(_ => {
    if (total > 21) total -= 10;
  });

  return total;
}

// log players cards
function displayPlayerCards(cards) {
  console.log(`Player's Hand: ${calculateHandTotal(cards)}`);
  cards.forEach(el => {
    console.log(`\t${el[1]} of ${el[0]}`);
  });
}

// display dealers cards
function displayDealerCards(cards, currPlayer) {
  if (currPlayer === 'dealer') {
    console.log(`Dealer's Hand: ${calculateHandTotal(cards)}`);
  } else {
    console.log("Dealer's Hand: ***");
  }

  cards.forEach((el, idx) => {
    if (idx === cards.length - 1) {
      if (currPlayer === 'dealer') {
        console.log(`\t${el[1]} of ${el[0]}`);
      } else {
        console.log('\tHidden Card');
      }
    } else {
      console.log(`\t${el[1]} of ${el[0]}`);
    }
  });
}

// display cards with totals totals
function displayHands(dCards, pCards) {
  console.clear();
  displayDealerCards(dCards, CURRENT_PLAYER[0]);
  console.log();
  displayPlayerCards(pCards);
}

// perform dealer hit or stay
function dealerTurn(dCards, pCards) {
  let dealerHand = calculateHandTotal(dCards);
  while (dealerHand < 17) {
    DEALER_CARDS.push(SHUFFLED_CARDS.shift());
    dealerHand = calculateHandTotal(dCards);

    displayHands(dCards, pCards);
  }

  displayHands(dCards, pCards);
}

// ask player to hit or stay
function hitOrStayQuestion() {
  console.log('');
  console.log('Do you want to hit or stay?');
  let answer = rlSync.prompt().toLowerCase();

  while (!['hit', 'h', 'stay', 's'].includes(answer)) {
    console.log('Invalid input: Hit or stay');
    answer = rlSync.prompt().toLowerCase();
  }

  return answer;
}

// add cards to player hand
function playerHit(cards) {
  PLAYER_CARDS.push(cards.shift());
}

// player continues to hit
function playerTurn(makeMoveResponse) {
  while (['hit', 'h'].includes(makeMoveResponse)) {
    playerHit(SHUFFLED_CARDS);
    displayHands(DEALER_CARDS, PLAYER_CARDS);
    if (playerBust(PLAYER_CARDS)) {
      CURRENT_PLAYER[0] = 'dealer';
      displayHands(DEALER_CARDS, PLAYER_CARDS);
      break;
    } else if (playerHasTwentyOne(PLAYER_CARDS)) {
      CURRENT_PLAYER[0] = 'dealer';
      displayHands(DEALER_CARDS, PLAYER_CARDS);
      break;
    }
    makeMoveResponse = hitOrStayQuestion();
  }
  setDealerAsCurrentPlayer(makeMoveResponse);
}

// determine if player busts
function playerBust(cards) {
  let playerHand = calculateHandTotal(cards);
  return playerHand > 21;
}

// determine if player gets 21
function playerHasTwentyOne(cards) {
  let playerHand = calculateHandTotal(cards);
  return playerHand === 21;
}

// change current player
function setDealerAsCurrentPlayer(hitResponse) {
  if (['stay', 's'].includes(hitResponse)) {
    CURRENT_PLAYER[0] = 'dealer';
  }
}

// determine and log winner to console
function printWinner(dCards, pCards) {
  let dealerTotal = calculateHandTotal(dCards);
  let playerTotal = calculateHandTotal(pCards);

  if ((dealerTotal > 21) && (playerTotal <= 21)) {
    console.log('Dealer Bust! Player Win!');
  } else if ((dealerTotal <= 21) && (playerTotal > 21)) {
    console.log('Bust! Dealer Win');
  } else if ((dealerTotal > playerTotal) && (dealerTotal <= 21)) {
    console.log('Dealer Win');
  } else if ((playerTotal > dealerTotal) && (playerTotal <= 21)) {
    console.log('Congratulations! Player Win!');
  } else if ((dealerTotal > 21) && (playerTotal > 21)) {
    console.log('Both Bust');
  } else {
    console.log('Push');
  }
}

// display final result
function finalResult() {
  console.log(`Dealer: ${calculateHandTotal(DEALER_CARDS)}`);
  console.log(`Player: ${calculateHandTotal(PLAYER_CARDS)}`);
  printWinner(DEALER_CARDS, PLAYER_CARDS);
}

// game logic
function playGame() {
  initalDealing(SHUFFLED_CARDS);

  let hitOrStayAnswer = hitOrStayQuestion();

  playerTurn(hitOrStayAnswer);
  dealerTurn(DEALER_CARDS, PLAYER_CARDS);

  finalResult();
}

// clear card values
function resetCards() {
  SHUFFLED_CARDS.length = 0;
  PLAYER_CARDS.length = 0;
  DEALER_CARDS.length = 0;
  CURRENT_PLAYER[0] = 'player';
}

// reset total score values
function resetScores() {
  PLAYER_WINS[0] = 0;
  DEALER_WINS[0] = 0;
  PUSH_OR_BUST[0] = 0;
}

// update the score for best-of-five
function updateScore(dCards, pCards) {
  let dealerTotal = calculateHandTotal(dCards);
  let playerTotal = calculateHandTotal(pCards);

  if ((dealerTotal > 21) && (playerTotal <= 21)) {
    PLAYER_WINS[0] += 1;
  } else if ((dealerTotal <= 21) && (playerTotal > 21)) {
    DEALER_WINS[0] += 1;
  } else if ((dealerTotal > playerTotal) && (dealerTotal <= 21)) {
    DEALER_WINS[0] += 1;
  } else if ((playerTotal > dealerTotal) && (playerTotal <= 21)) {
    PLAYER_WINS[0] += 1;
  } else if ((dealerTotal > 21) && (playerTotal > 21)) {
    PUSH_OR_BUST[0] += 1;
  } else {
    PUSH_OR_BUST[0] += 1;
  }
}

// display best-of-five results
function bestOfFiveResult() {
  console.log('');
  console.log('*****************************');
  console.log(`Player Wins: ${PLAYER_WINS[0]}`);
  console.log(`Dealer Wins: ${DEALER_WINS[0]}`);
  console.log(`Push or Both Bust: ${PUSH_OR_BUST[0]}`);
  console.log('*****************************');
  console.log('');
}

while (true) {
  greeting();
  let gameCount = 0;
  let game = gameType();

  while (true) {
    console.clear();
    shuffle(CARDS);

    playGame();
    if ((game === 'best-of-five') && (gameCount < BEST_OF_FIVE)) {
      rlSync.question('Press any button to continue');
    }

    if (game === 'single') break;
    if ((game === 'best-of-five') && (gameCount > BEST_OF_FIVE)) {
      bestOfFiveResult();
      break;
    } else {
      updateScore(DEALER_CARDS, PLAYER_CARDS);
      resetCards();
      gameCount++;
    }
  }

  console.log('Play again?');
  let answer = rlSync.prompt().toLowerCase();

  while (!['yes', 'y', 'no', 'n'].includes(answer)) {
    console.log('Invalid Input');
    console.log('Play again?');
    answer = rlSync.prompt().toLowerCase();
  }

  resetCards();
  resetScores();
  if (['no', 'n'].includes(answer)) {
    console.log('Goodbye');
    break;
  }
}