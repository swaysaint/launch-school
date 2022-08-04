// Practice Problem 11:
// Create an object that expresses the frequency with which each letter occurs
// in this string:

let statement = "The Flinstones Rock";
let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);

