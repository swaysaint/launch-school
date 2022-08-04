/* Write a program that prompts the user for two positive integers, and then
prints the results of the following operations on those two numbers: addition,
substraction, product, quotient, remainder, and power. Do not worry about
validating the input.
 */

const readline = require('readline-sync');

function prompt(s) {
  console.log(`==> ${s}`);
}

prompt('Enter the first number:');
let num1 = Number(readline.prompt());
prompt('Enter the second number:');
let num2 = Number(readline.prompt());

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`);