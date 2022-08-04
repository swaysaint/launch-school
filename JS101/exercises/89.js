// ROTATION (PART 2)
//
// Write a function that rotates the last count digits of a number. To perform
// the rotation, move the first of the digits that you want to rotate to the end
// and shift the remaining digits to the left.

function rotateRightmostDigits(num, count) {
  let numArray = String(num).split('');
  for (let idx = 0; idx < numArray.length; idx++) {
    if (idx === numArray.length - count) {
      return Number(numArray.slice(0, idx)
        .concat(numArray.slice(idx + 1 || ''))
        .concat(numArray[idx])
        .join(''));
    }
  }
  return numArray.join('');
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917