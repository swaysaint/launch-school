// NOW I KNOW MY ABCS
//
// A collection of spelling blocks has two letters per block, as shown in this
// list:
//
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
//
// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each
// block once.
//
// Write a function that takes a word string as an argument and returns true
// if the word can be spelled using the set of blocks, false otherwise. You can
// consider the letters to be case-insensitive when you apply the rules.

// PEDAC
// Take a string of a word
// Return a boolean of whether that word can be formed based on the rules
// There are 13 pairs of letters, cannot use both letters in the same word
// Can only use each block once
// Case insensitve

// DATA
// Store spelling blocks as a 2d array

// ALGO
// - initialize spelling blocks arrays
// - initialize seen blocks array
// - iterate through each letter of the string
// - if letter or letter's pair is in seen blocks, return false
// - add block to seen blocks
// - continue
// - return true


function isBlockWord(string) {
  const spellingBlocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'],
    ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
    ['V', 'I',], ['L', 'Y'], ['Z', 'M']];
  const seenBlocks = [];
  return string.split('').map(letter => {
    if (seenBlocks.flat().includes(letter.toUpperCase())) {
      return false;
    } else {
      seenBlocks.push(
        spellingBlocks.filter(pair => pair.includes(letter.toUpperCase()))[0]);
      return true;
    }
  }).every(ele => ele);
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false