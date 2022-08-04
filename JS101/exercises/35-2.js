const readline = require("readline-sync");
const nums = [];
console.log('Enter the 1st number:');
nums.push(Number(readline.prompt()));
console.log('Enter the 2nd number:');
nums.push(Number(readline.prompt()));
console.log('Enter the 3rd number:');
nums.push(Number(readline.prompt()));
console.log('Enter the 4th number:');
nums.push(Number(readline.prompt()));
console.log('Enter the 5th number:');
nums.push(Number(readline.prompt()));
console.log('Enter the last number:');
const lastNum = Number(readline.prompt());

if (nums.some(ele => ele === lastNum)) {
  console.log(`${lastNum} can be found in ${nums.join(',')}.`);
} else {
  console.log(`${lastNum} cannot be found in ${nums.join(',')}.`);
}