// RUNNING TOTALS
//
// Write a function that takes an array of numbers and returns an array with the
// same number of elements, but with each element's value being the running
// total from the original array.

function runningTotal(arr) {
  let prevEle = 0;
  return arr.map(ele => {
    let sum = prevEle + ele;
    prevEle += ele;
    return sum;
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []