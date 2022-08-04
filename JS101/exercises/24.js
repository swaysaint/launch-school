// DDAAIILLYY DDOOUUBBLLEE
/* Write a function that takes a string argument and returns a new string that
contains the value of the original string with all consecutive duplicate
characters collapsed into a single character.
 */

function crunch(string) {
  let prevChar = '';
  let newString = '';
  string.split('').forEach(char => {
    if (char !== prevChar) {
      newString += char;
    }
    prevChar = char;
  });
  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""