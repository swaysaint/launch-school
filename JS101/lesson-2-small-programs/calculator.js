// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const localStrings = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let goAgain;

prompt(localStrings.welcome);

do {
  prompt(localStrings.askFirstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(localStrings.invalidNumber);
    number1 = readline.question();
  }

  prompt(localStrings.askSecondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(localStrings.invalidNumber);
    number2 = readline.question();
  }

  prompt(localStrings.askOperation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(localStrings.invalidOperation);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(localStrings.result + output + '\n');
  prompt(localStrings.askPerformAgain);
  let shouldGoAgain = readline.question();

  while (!['1','2'].includes(shouldGoAgain)) {
    prompt(localStrings.invalidPerformAgainn);
    shouldGoAgain = readline.question();
  }

  goAgain = Number(shouldGoAgain);

} while (goAgain === 1);