// Practice Problem 8:
// Take a look at the following array.

let flinstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where the names are
// the keys and the values are the positions in the array.

let flinstonesObj = {};
flinstones.forEach((name, index) => {
  flinstonesObj[name] = index;
});
console.log(flinstonesObj);

