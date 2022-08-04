/* Write a program that asks the user to enter an integer greater than 0, then
asks whether the user wants to determine the sum or or the product of all
numbers between 1 and the entered integer, inclusive
 */

let readline = require('readline-sync');

console.log('Please enter an integer greater than 0: ');
let integer = Number(readline.question());
console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let calc = String(readline.question());

if (calc === 's') {
  let total = 0;
  for (let i = 1; i <= integer; i++) {
    total += i;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${total}`);
} else if (calc === 'p') {
  let total = 1;
  for (let i = 1; i <= integer; i++) {
    total *= i;
  }
  console.log(`The product of the integers between 1 and ${integer} is ${total}`);
}
