// WHEN WILL I RETIRE?
// Build a program that logs when the user will retire and how many more years
// the user has to work until requirement.

const readline = require('readline-sync');
const currentYear = new Date().getFullYear();

console.log('What is your age?');
let currentAge = Number(readline.prompt());
console.log('At what age would you like to retire?');
let retireAge = Number(readline.prompt());

console.log(`It's ${currentYear}. You will retire in ${currentYear + retireAge -
currentAge}`);
console.log(`You only have ${retireAge - currentAge} years of work to go!`);
