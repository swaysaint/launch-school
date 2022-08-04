// MERGE SORT
//
// Merge sort is a recursive sorting algorithm that works by breaking down an
// array's elements into nested subarrays, then combining those nested
// subarrays back together in sorted order. It is best explained with an
// example.
//
// Given the array [9, 5, 7, 1], let's walk through the process of sorting it
// with merge sort. We'll start off by breaking the array down into nested
// subarrays:
//
// 1 [9, 5, 7, 1] -->
// 2 [[9, 5], [7, 1]] -->
// 3 [[[9], [5]], [[7], [1]]]
//
// We then work our way back to a flat array by merging each pair of nested
// subarrays back together in the proper order:
// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let firstHalf = arr.slice(0, arr.length / 2);
  let secondHalf = arr.slice(arr.length / 2);
  firstHalf = mergeSort(firstHalf);
  secondHalf = mergeSort(secondHalf);

  return merge(firstHalf, secondHalf);
}

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

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(
  mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(
  mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]