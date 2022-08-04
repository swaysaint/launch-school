// ROTATION (PART 3)
//
// Take the number 735291 and rotate it by one digit to the left, getting
// 325917. Next, keep the first digit fixed in place and rotate the remaining
// digits to get 329175. Keep the first two digits fixed in place and rotate
// again to get 321759. Keep the first three digits fixed in place and rotate
// again to get 321597. Finally, keep the first four digits fixed in place and
// rotate the final two digits to get 321579. The resulting number is called the
// maximum rotation of the original number.
//
// Write a function that takes an integer as an argument and returns the maxium
// rotation of that integer. You can (and probably should) use the
// rotateRightmostDigits function from the previous exercise.

function maxRotation(num) {
  let numberDigits = String(num).length;
  for (let count = numberDigits; count >= 2; count--) {
    num = rotateRightmostDigits(num, count);
  }
  return num;
}

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);
  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845