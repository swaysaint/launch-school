// THE END IS NEAR BUT NOT HERE
/* Write a function that returns the next to last word in the string passed to
it as an argument.
Words are any sequence of non-blank characters.
You may assume that the input string will always contain at least two words.
 */

const penultimate = string => string.split(' ')[string.split(' ').length - 2];
const midWord = string => string.split(' ')[Math.floor(
  string.split(' ').length / 2)];

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(midWord("one two three four five"));
console.log(midWord("one two three four"));
console.log(midWord("one"));
console.log(midWord(""));

