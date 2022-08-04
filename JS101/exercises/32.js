// CLEAN UP THE WORDS
//
// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string with all
// of the non-alphabetic characters replaced by spaces. If one or more
// non-alphabetic characters occurs in a row, you should only have one space in
// the result (i.e., the result string should never have consecutive spaces).

function cleanUp(str) {
  const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let prevChar = '';
  let result = '';
  for (let index = 0; index < str.length; index++) {
    if (validChars.includes(str[index])) {
      prevChar = str[index];
      result += str[index];
    } else {
      if (prevChar === ' ') {
        result += '';
      } else {
        result += ' ';
        prevChar = ' ';
      }
    }
  }
  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "