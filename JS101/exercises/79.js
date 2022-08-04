// DELETE VOWELS
//
// Write a function that takes an array of strings and returns an arry of the
// same string values, but with all vowels (a, e, i, o, u) removed.

const VOWELS = 'AEIOUaeiou';

function removeVowels(strArr) {
  return strArr.map(
    word => word.split('').filter(char => !VOWELS.includes(String(char)))
      .join(''));
}

function removeVowels2(strArr) {
  return strArr.map(str => str.replace(/[aeiou]/gi, ""));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels2(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]