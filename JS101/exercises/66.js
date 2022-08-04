// REVERSED ARRAYS
//
// Write a function that takes an Array as an argument and reverses its elements
// in place. That is, mutate the Array passed into this method. The return value
// should be the same Array object.
//
// You may not use Array.prototype.reverse().

function reverse(arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    arr.splice(idx, 0, arr.pop());
  }
  return arr;
}

console.log(reverse([1, 2, 3, 4]));
console.log(reverse(["a", "b", "c", "d", "e"]));
console.log(reverse(["abc"]));
console.log(reverse([]));