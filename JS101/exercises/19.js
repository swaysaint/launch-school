// ODD LISTS
/* Write a function that returns an Array that contains every other element of
an Array that is passed in as an argument. The values in the returned list
should be those values that are in the 1st, 3rdx, 5th, and so on elements of the
argument Array.
 */

function oddities(arr) {
  let oddElements = [];
  for (let count = 0; count < arr.length; count += 2) {
    oddElements.push(arr[count]);
  }
  return oddElements;
}

function oddities2(arr) {
  return arr.filter((element, index) => index % 2 === 0);
}

function evens(arr) {
  let evenElements = [];
  for (let count = 1; count < arr.length; count += 2) {
    evenElements.push(arr[count]);
  }
  return evenElements;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(oddities2([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities2([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities2(["abc", "def"])); // logs ['abc']
console.log(oddities2([123])); // logs [123]
console.log(oddities2([])); // logs []

console.log(evens([2, 3, 4, 5, 6]));
console.log(evens([1, 2, 3, 4, 5, 6]));
console.log(evens(["abc", "def"]));
console.log(evens([123]));
console.log(evens([]));