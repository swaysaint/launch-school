// Convert a String to a Number!

/* The parseInt() method converts a string of numeric characters (including an
optional plus or minus sign) to an integer. The method takes 2 arguments where
the first argument is the string we want to convert and the second argument
should always be 10 for our purposes. parseInt() and the Number() method behave
similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate
number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about
invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript,
such as String() and Number(). Your function should do this the old-fashioned
way and calculate the result by analyzing the characters in the string.
 */

function stringToInteger(string) {
  return string * 1;
}

function hexadecimalToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };
  let result = 0;
  let multiplier = 1;
  for (let count = string.length - 1; count >= 0; count--) {
    result += (DIGITS[string[count].toUpperCase()] * multiplier);
    multiplier *= 16;
  }
  return result;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

console.log(hexadecimalToInteger('4D9f') === 19871); // logs true