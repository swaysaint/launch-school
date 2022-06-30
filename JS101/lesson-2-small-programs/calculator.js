// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const LOCAL_STRINGS = require('./calculator_messages.json');
let userLanguage = 'en';

function messages(message, lang) {
  return LOCAL_STRINGS[lang][message];
}

function prompt(key) {
  let message = messages(key, userLanguage);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('askLanguage');
let language = readline.question();

while (!['1','2'].includes(language)) {
  prompt('invalidLanguage');
  language = readline.question();
}

if (language === '1') {
  userLanguage = 'en';
} else if (userLanguage === '2') {
  userLanguage = 'zh';
}

let goAgain;

prompt('welcome');

do {
  prompt('askFirstNumber');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = readline.question();
  }

  prompt('askSecondNumber');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(invalidNumber);
    number2 = readline.question();
  }

  prompt('askOperation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
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

  prompt('result');
  console.log(output);
  prompt('askPerformAgain');
  let shouldGoAgain = readline.question();

  while (!['1','2'].includes(shouldGoAgain)) {
    prompt('invalidPerformAgain');
    shouldGoAgain = readline.question();
  }

  goAgain = Number(shouldGoAgain);

} while (goAgain === 1);