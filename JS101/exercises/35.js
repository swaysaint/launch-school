// SEARCHING 101
// Write a program that solicits six numbers from the user and logs a message
// that describes whether the sixth number appears among the first five numbers.

const readline = require('readline-sync');

function getNums() {
  const nums = {};
  console.log('Enter the 1st number:');
  nums.one = readline.prompt();
  console.log('Enter the 2nd number:');
  nums.two = readline.prompt();
  console.log('Enter the 3rd number:');
  nums.three = readline.prompt();
  console.log('Enter the 4th number:');
  nums.four = readline.prompt();
  console.log('Enter the 5th number:');
  nums.five = readline.prompt();
  console.log('Enter the last number:');
  nums.six = readline.prompt();
  return nums;
}

const nums = Object.values(getNums());
let firstNums = nums.slice(0, nums.length - 1);
let lastNum = nums[nums.length - 1];
if (firstNums.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${firstNums.join(',')}.`);
} else {
  console.log(
    `The number ${lastNum} does not appear in ${firstNums.join(',')}.`);
}