// COMBINING ARRAYS
//
// Write a function that takes two arrays as arguments and returns an array
// containing the union of the values from the two. There should be no
// duplication of values in the returned array, even if there are duplicates in
// the original arrays. You may assume that both arguments will always be
// arrays.

function union (arr1, arr2) {
  let resultArr = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    if (!resultArr.includes(arr1[idx])) {
      resultArr.push(arr1[idx]);
    }
  }
  for (let idx = 0; idx < arr2.length; idx++) {
    if (!resultArr.includes(arr2[idx])) {
      resultArr.push(arr2[idx]);
    }
  }
  return resultArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]