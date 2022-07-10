// Practice Problem 1
// How would you order the following array of number strings by descending
// numeric value (largest number value to smallest??

let arr = ['10', '11', '9', '7', '8'];
let sortedArr = arr.slice()
  .sort((a, b) => Number(b) - Number(a));
console.log(sortedArr);

// Practice Problem 2
// How would you order the following array of objects based on the year of
// publication of each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Pace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

let booksSortedByPublishingDate = books.slice()
  .sort((a, b) => Number(a.published) - Number(b.published));

console.log(booksSortedByPublishingDate);

// Practice Problem 3
// For each of these collection objects, demonstrate how you would access the
// letter 'g'

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
let arr1G = arr1[2][1][3];
console.log(arr1G);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f']}, { third: ['g', 'h', 'i'] }];
let arr2G = arr2[1].third[0];
console.log(arr2G);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
let arr3G = arr3[2].third[0][0];
console.log(arr3G);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
let obj1G = obj1.b[1];
console.log(obj1G);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1}, third: {g: 0}};
let obj2G = Object.keys(obj2.third)[0];
console.log(obj2G);

// Practice Problem 4
// For each of these collection objects, demonstrate how you would change the
// value 3 to 4

let arr11 = [1, [2, 3], 4];
arr11[1][1] = 4;
console.log(arr11);

let arr22 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr22[2] = 4;
console.log(arr22);

let obj11 = { first: [1, 2, [3]] };
obj11.first[2][0] = 4;
console.log(obj11);

let obj22 = { a: { a: ['1', 'two', 3], b: 4}, b: 5 };
obj22.a.a[2] = 4;
console.log(obj22);

// Practice Problem 5
// Consider the following nested object - compute and display the total age of
// the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};

let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member].gender === 'male') {
    totalMaleAge += munsters[member].age;
  }
}

console.log(totalMaleAge);

// Practice Problem 6
// One of the most frequently used real-world string operations is that of
// "string substitution," where we take a hard-coded string and modify it with
// various parameters from our program.
// Given this previously seen family object, print the name, age, and gender
// of each family member.
// Each output should follow this pattern:
// (Name) is a (age)-year-old (male or female).

for (let member in munsters) {
  let name = member;
  let age = munsters[member].age;
  let gender = munsters[member].gender;
  console.log(`${name} is a ${age}-year-old ${gender}`);
}

// Practice Problem 7:
// Given the following code, what will the final values of 'a' and 'be' be?
// Try to answer without running the code

let a = 2;
let b = [5, 8];
let arrZ = [a, b];

arrZ[0] += 2;
arrZ[1][0] -= a;

// a = 2; b = [3, 8]

console.log(arrZ);

// Practice Problem 8
// Using the forEach method, write some code to output all vowels from the
// strings in the arrays. Don't use a for or while loop.

let objStrings = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou';

let objValues = Object.values(objStrings);
objValues.forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});

// Practice Problem 9
// Given the following data structure, return a new array with the same
// structure, but with the values in each subarray ordered -- alphabetically or
// numerically as appropriate -- in ascending order

let crazyArr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
let newArr = crazyArr.slice().map(arr => {
  if (typeof arr[0] === 'string') {
    return arr.sort();
  } else {
    return arr.sort((a, b) => a - b);
  }
});

console.log(newArr);

// Practice Problem 10
// Perform the same transformation of sorting the sub-arrays we did in the
// previous exercise with one difference; sort the elements in descending order.

let newArr2 = crazyArr.slice().map(arr => {
  if (typeof arr[0] === 'string') {
    return arr.sort().reverse();
  } else {
    return arr.sort((a, b) => b - a);
  }
});

console.log(newArr2);

// Practice Problem 11
// Given the following data structure, use the map method to return a new array
// identical in structure to the original but, with each number incremented by
// 1. Do not modify the original data structure.

let arr69 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr69 = arr69.slice().map(obj => {
  for (let key in obj) {
    obj[key] += 1;
  }
  return obj;
});

console.log(newArr69);

// Practice Problem 12
// Given the following data structure, use a combination of methods, including
// filter, to return a new array identical in structure to the original, but
// containing only the numbers that are multiples of 3.

let arr99 = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr99 = arr99.slice().map(subArr => {
  return subArr.filter(num => num % 3 === 0);
});

console.log(newArr99);

// Practice Problem 13
// Given the following data structure, sort the array so that the sub-arrays are
// ordered based on the sum of the odd numbers that they contain.

let arr55 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
let newArr55 = arr55.slice().sort((firstArr, secondArr) => {
  return firstArr.filter(num => num % 2 === 1)
    .reduce((a, b) => a + b)
    - secondArr.filter(num => num % 2 === 1)
      .reduce((a, b) => a + b);
});

console.log(newArr55);

// Practice Problem 14
// Given the following data structure write some code to return an array
// containing the colors of the fruits and the sizes of the vegetables.
// The sizes should be uppercase, and the colors should be capitalized

let fruits = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' }
};

let capitalize = word => word[0].toUpperCase() + word.slice(1);

let fruitArr = Object.values(fruits).map(attributes => {
  if (attributes.type === 'fruit') {
    return attributes.colors.map(char => capitalize(char));
  } else {
    return attributes.size.toUpperCase();
  }
});

console.log(fruitArr);

// Practice Problem 15
// Given the following data structure, write some code to return an array which
// contains only the objects where all the numbers are even

let arr80 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr80 = arr80.filter(obj => {
  return Object.values(obj).every(arr => {
    return arr.every(num => num % 2 === 0);
  });
});

console.log(newArr80);

// Practice Problem 16
// Given the following data structure, write some code that defines an object
// where the key is the first item in each subarray, and the value is the
// second.

let arr88 = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];

let arr88Obj = {};
arr88.forEach(subArr => {
  arr88Obj[subArr[0]] = subArr[1];
});

console.log(arr88Obj);

// Practice Problem 17
// A UUID is a type of identifier often used to uniquely identify items, even
// when some of those items were created on a different server or by a different
// application. That is, without any synchronization, two or more computer
// systems can create new items and label them with a UUID with no significant
// risk of stepping on each other's toes. It accomplishes this feat through
// massive randomization. The number of possible UUID values is approximately
// 3.4 x 10e38, which is a huge number. The chance of conflict is vanishingly
// small with such a large number of possible values.

// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the
// letters a-f) representing a string. The value is typically broken into 5
// sections in an 8-4-4-4-12 pattern, e.g.,
// 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
// Write a function that takes no arguments and returns a string that contains
// a UUID.

function createUUID() {
  const hexadecimalValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  const sections = [8, 4, 4, 4, 12];
  let uuid = '';

  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * hexadecimalValues.length);
      uuid += (hexadecimalValues[randomIndex]);
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });
  return uuid;
}

console.log(createUUID());