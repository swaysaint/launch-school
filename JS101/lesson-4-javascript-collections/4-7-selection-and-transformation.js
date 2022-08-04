/*
Let's look at an example with objects. In this example, we want to select the
key-value pairs where the value is 'Fruit'.
 */

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let numbers = [1, 4, 3, 7, 2, 6];
let numbers2 = [1, 4, 3, 7, 2, 6];

function selectFruit(produceList) {
  let fruitObj = {};
  for (let key in produceList) {
    if (produceList[key] === 'Fruit') {
      fruitObj[key] = produceList[key];
    }
  }
  return fruitObj;
}

function doubleNumbers(numbers) {
  for (let counter = 0; counter < numbers.length; counter++) {
    numbers[counter] = numbers[counter] *= 2;
  }
}

function doubleOddIndexNumbers(numbers) {
  let doubledOddIndexNumbers = [];
  for (let count = 0; count < numbers.length; count++) {
    if (count % 2 === 1) {
      doubledOddIndexNumbers.push(numbers[count] * 2);
    } else {
      doubledOddIndexNumbers.push(numbers[count]);
    }
  }
  return doubledOddIndexNumbers;
}

function multiply(numbers, multiplyValue) {
  let multipliedNumbers = [];
  for (let count = 0; count < numbers.length; count++) {
    multipliedNumbers.push(numbers[count] * multiplyValue);
  }
  return multipliedNumbers;
}

// console.log(selectFruit(produce));
// console.log(produce);
// doubleNumbers(numbers);
// console.log(numbers);
// console.log(doubleOddIndexNumbers(numbers2));
console.log(multiply(numbers, 3));