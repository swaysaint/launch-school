// SUM SQUARE - SQUARE SUM
//
// Write a function that computes the difference between the square of the sum
// of the first count positive integers and the sum of the squares of the first
// count positive integers.

function sumSquareDifference(num) {
  const numArr = [];
  for (let count = 1; count <= num; count++) {
    numArr.push(count);
  }
  const squareSum = numArr.reduce((accum, curVal) => accum + curVal, 0) ** 2;
  const sumSquare = numArr.reduce((accum, curVal) => accum + (curVal ** 2), 0);
  return squareSum - sumSquare;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150