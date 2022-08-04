// MERGE SORTED LISTS
//
// Write a function that takes two sorted arrays as arguments and returns a new
// array that contains all the elements from both input arrays in sorted order.
//
// You may not provide any solution that requires you to sort the result array.
// You must build the array one element at a time in the proper order.
//
// Your solution should not mutate the input arrays.

function merge(arr1, arr2) {
  let arr1Copy = arr1.slice();
  let arr2Copy = arr2.slice();
  let result = [];
  while (arr1Copy.length > 0 && arr2Copy.length > 0) {
    result.push(
      arr1Copy[0] <= arr2Copy[0] ? arr1Copy.shift() : arr2Copy.shift());
  }
  return result.concat(arr1Copy.length === 0 ? arr2Copy : arr1Copy);
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]