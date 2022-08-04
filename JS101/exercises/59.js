// GET THE MIDDLE CHARACTER
//
// Write a function that takes a non-empty string argument and returns the
// middle character(s) of the string. If the string has an odd length, you
// should return exactly one character. If the string has an even length, you
// should return exactly two characters.

function centerOf(str) {
  return str.length % 2 !== 0 ? str[Math.floor(str.length / 2)] :
    str.slice((str.length / 2) - 1, (str.length / 2) + 1);
}
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"