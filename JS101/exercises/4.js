/* Build a program that asks the user to enter the length and width of a room
in meters, and then logs the area of the room to the console in both square
meters and square feet.
 */

const readline = require('readline-sync');

const SQM_TO_SQF = 10.7639;

console.log('Enter the length of the room in meters:');
let length = readline.question();
console.log('Enter the width of the room in meters:');
let width = readline.question();

let sqmArea = (length * width).toFixed(2);
let sqfArea = (sqmArea * SQM_TO_SQF).toFixed(2);

console.log(`The area of the room is ${sqmArea} square meters (${sqfArea} square feet).`);