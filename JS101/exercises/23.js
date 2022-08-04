//CONVERT A SIGNED NUMBER TO STRING!
/* In the previous exercise, you developed a function that converts non-negative
numbers to strings. In this exercise, you're going to extend that function by
adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it to a string
representation.

You may not use any of the standard conversion functions available in
JavaScript, such as String() and Number.prototype.toString(). You may, however,
use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.
 */

function integerToString(int) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';

  do {
    let remainder = int % 10;
    int = Math.floor(int / 10);
    result = DIGITS[remainder] + result;
  } while (int > 0);
  return result;
}

function signedIntegerToString(int) {
  if (Math.sign(int) === -1) {
    return '-' + integerToString(-int);
  } else if (Math.sign(int) === 1) {
    return '+' + integerToString(int);
  } else return integerToString(int);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");