/* Question 1: Given a string, return a new string that replaces every
occurence of the word "important" with "urgent":
 */

let advice = "Few things in life are as important as house training your " +
  "pet dinosaur.";

advice.replaceAll('important', 'urgent');

/* Question 2: The Array.prototype.reverse method reverses the order of elements
in an array, and Array.prototype.sort can rearrange the elements in a variety
of ways, including descending. Both of these methods mutate the original array
as shown below. Write two distinct ways of reversing the array without mutating
the original array. Use reverse for the first solution, and sort for the second.
 */

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);

let reversedNumbers = numbers.slice().reverse();

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);

let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);

let sortedArray2 = [];
numbers.forEach((number) => {
  sortedArray2.unshift(number);
}

/* Question 3: Given a number and an array, determine whether the number is
included in the array.
 */

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;
let number2 = 95;
numbers.includes(number1);
numbers.includes(number2);)

/* Question 4: Starting with the below string, show two different ways to put
the expected "Four score and " in front of it.
 */

let famousWords = "seven years ago..."
let fullFamousWords = 'Four score and '.concat(famousWords);
let fullFamousWords2 = 'Four score and ' + famousWords;

/* Question 5: Given an array of numbers [1, 2, 3, 4, 5], mutate the array by
removing the number at index 2, so that the array becomes [1, 2, 4, 5].
 */

let numArr = [1, 2, 3, 4, 5];
numArr.splice(2, 1);

/* Question 6: Suppose we build an array like this. Nesting dat structures like
we do here is commonplace in Javascript and programming in general. Create a new
array that contains all of the above values, but in an un-nested format.
 */

let flinstones = ["Fred", "Wilma"];
flinstones.push(["Barney", "Betty"]);
flinstones.push(["Bambam", "Pebbles"])

let newFlinstones = [].concat(...flinstones);
let newFlinstones2 = flinstones.reduce((acum, element) => {
  return accum.concat(element);
}, []);
let newFlinstones3 = []
flinstones.forEach(element => {
  newFlinstones3 = newFlinstones3.concat(element);
})

/* Question 7: Consider the following object. Create an array from this object
that contains only two elements: Barney's name and Barney's number.
 */

let flinstonesObj = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4,
  Pebbles: 5};

Object.entries(flinstonesObj).filter(pair => pair[0] === 'Barney').shift();

/* Question 8: How would you check whether the objects assigned to variables
numbers and table below are arrays?
 */

let numbers = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4};
Array.isArray(numbers);
Array.isArray(table);

/* Question 9: Back in the stone age (before CSS), we used spaces to align
things on the screen. If we have a 40-character wide table of Flinstone family
members, how can we center the following title above the table with spaces
 */

let title = "Flinstone Family Members";
let padding = Math.floor((40 - title.length) / 2);
title.padStart(padding + title.length);

/* Question 10: Write a one-line expression to count the number of lower-case
t characters in each of the following strings:
 */

let statement1 = "The Flinstones Rock!";
let statement2 = "Easy come, easy go.";
statement1.split('').filter(char => char === 't').length;
statement2.split('').fliter(char => char === 't').length;