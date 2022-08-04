/* Create a simple tip calculator. The program should prompt for a bill amount
and a tip rate. The program must compute the tip, and then log both the tip and
the total amount of the bill to the console. You can ignore input validation and
assume the user will enter numbers.
 */

const readline = require('readline-sync');

console.log('What is the bill?');
let billTotal = Number(readline.question());
console.log('What is the tip percentage?');
let tipPercentage = Number(readline.question() / 100);

let tip = Number(billTotal * tipPercentage).toFixed(2);
let totalWithTip = (Number(billTotal) + Number(tip)).toFixed(2);
console.log(`The tip is $${tip}`);
console.log(`The total is $${totalWithTip}`);

// better solution

let billTotal2 = parseFloat(readline.question("What is the bill?"));
let percentage = parseFloat(readline.question("What is the tip percentage?"));

let tip2 = billTotal2 * (percentage / 100);
let total2 = billTotal2 + tip2;
console.log(`The tip is $${tip2.toFixed(2)}`);
console.log(`The total is is $${total2.toFixed(2)}`);