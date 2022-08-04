/* Question 1:
Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the
days before computers had video screens.

For this practice problem, write a program that outputs 'The Flinstones Rock!'
10 times, with each line indented 1 space to the right of the line above it.
 */
/*
let asciiString = "The Flinstones Rock";
for (let count = 0; count < 10; count++) {
  console.log(asciiString.padStart(asciiString.length + count));
}
*/

for (let padding = 0; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}