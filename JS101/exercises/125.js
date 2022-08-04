// NEUTRALIZER
//
// We wrote a neutralize function that removes negative words from sentences.
// However, it fails to remove all of them. What exactly happens?

function neutralize(sentence) {
  let words = sentence.split(" ");
  return words.reduce((accum, word) => {
    if (!isNegative(word)) {
      accum.push(word);
    }
    return accum;
  }, []).join(' ');
}

function neutralize2(sentence) {
  let words = sentence.split(" ");
  return words.filter(word => !isNegative(word)).join(' ');
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.

// Splice mutates the original array, so the index will be changing during
// forEach.