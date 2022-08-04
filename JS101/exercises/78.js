// UPPERCASE CHECK
//
// Write a function that takes a string and returns true if all the alphabetic
// characters inside the string are uppercase; false otherwise. Ignore
// characters that are not alphabetic.

function isUppercase(str) {
  return str === str.toUpperCase();
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true