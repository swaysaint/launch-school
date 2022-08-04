const readline = require('readline-sync');
const {parse} = require("babel-eslint");

function computeSum(targetNum) {
  let total = 0;
  for (let num = 1; num <= targetNum; num++) {
    total += num;
  }
  return num;
}

function computerProduct(targetNum) {
  let total = 1;
  for (let num = 1; num <= targetNum; num++) {
    total *= num;
  }
  return num;
}

console.log('Please enter an integer greater than 0: ');
let number = parseInt(readline.prompt(), 10);

console.log("Enter 's' to compute the sum or 'p' to compute the product");
let operation = readline.prompt();

if (operation === 's') {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}`);
} else if (operation === 'p') {
  let product = computerProduct(number);
  console.log(`The product of the integers between 1 and ${number} is ${product}`);
} else {
  console.log('Unknown operation');
}