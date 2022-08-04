// LETTER CASE COUNTER
//
// Write a function that takes a string and returns an object containing three
// properties: one representing the number of characters in the string that are
// lowercase letters, one representing the number of characters that are
// uppercase letters, and one representing the number of characters that are
// neither.

function letterCaseCount(str) {
  const NON_LETTERS = /[^a-zA-z]/g;
  let result = { lowercase: 0, uppercase: 0, neither: 0};
  result.neither = str.length - str.replace(NON_LETTERS, '').length;
  result.uppercase = str.replace(NON_LETTERS, '').split('')
    .filter(char => char === char.toUpperCase()).length;
  result.lowercase = str.replace(NON_LETTERS, '').split('')
    .filter(char => char === char.toLowerCase()).length;
  return result;
}

function letterCaseCount2(str) {
  let lowercaseChars = str.match(/[a-z]/g) || [];
  let uppercaseChars = str.match(/[A-Z]/g) || [];
  let neitherChars = str.match(/[^a-z]/gi) || [];
  return { lowercase: lowercaseChars.length, uppercase: uppercaseChars.length,
    neither: neitherChars.length }
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount2('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount2(''));            // { lowercase: 0, uppercase: 0, neither: 0 }