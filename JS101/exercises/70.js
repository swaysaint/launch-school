// MULTIPLY ALL PAIRS
//
// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array shoud
// be sorted in ascending numerical order.
//
// You may assume that neither argument will be an empty array.

function multiplyAllPairs(arr1, arr2) {
  return arr1.map(num => multiplyNumByArray(num, arr2)).flat()
    .sort((a, b) => a - b);
}

function multiplyNumByArray(num, arr) {
  return arr.map(ele => ele * num);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16])

// for each num in arr 1
// multiply by each num in arr 2
// iterrate arr 1