// EXAMPLE 1

[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));

// Action: method call (forEach)
// - Performed on: the outer array
// - Side effect: none
// - Return value: 'undefined'
// - Return value used?: no

// Action: callback execution
// - Performed on: each sub-array
// - Side effect: none
// - Return value: undefined
// - Return value used?: no

// Action: element reference ([0])
// - Performed on: each sub-array
// - Side effect: none
// - Return value: each sub-array
// - Return value used?: yes - in console.log

// Action: method call (console.log)
// - Performed on: 0-index value of each sub-array
// - Side effect: outputs string representation of a Number
// - Return value: undefined
// - Return value used?: yes - to determine callback's return value

// ----------

// EXAMPLE 2

[[1, 2], [3, 4]].map(arr => console.log(arr[0]));

// Action: method call (map)
// - Performed on: the outer array
// - Side effect: none
// - Return value: new array ([undefined, undefined])
// - Return value used?: no

// Action: callback execution
// - Performed on: each sub-array
// - Side effect: none
// - Return value: undefined
// - Return value used?: yes - used by map for transformation

// Action: element access ([0])
// - Performed on: each sub-array
// - Side effect: none
// - Return value: 0-index value of sub-array
// - Return value used?: yes - used by console.log

// Action: method call (console.log)
// - Performed on: element at index 0 of each sub-array
// - Side effect: outputs a string representation of a Number
// - Return value: undefined
// - Return value used?: yes - used as the return value of the callback

// ----------

// EXAMPLE 3

[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

// Action: method call (map)
// - Performed on: the outer array
// - Side effect: none
// - Return value: new array ([1, 3])
// - Return value used?: no

// Action: callback execution
// - Performed on: each sub-array
// - Side effect: none
// - Return value: 1, 3
// - Return value used?: yes - used by map for transformation

// Action: element access ([0])
// - Performed on: each sub-array
// - Side effect: none
// - Return value: 0-index element of sub-array
// - Return value used?: yes - used by console.log

// Action: method call (console.log)
// - Performed on: element at index 0 of each sub-array
// - Side effect: outputs a string representation of a Number
// - Return value: undefined
// - Return value used?: no

// Action: element reference ([0])
// - Performed on: each sub-array
// - Side effect: none
// - Return value: element at index-0 of sub-array
// - Return value used?: yes, explicitly returned by callback

// ----------

// EXAMPLE 4

let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

// Action: variable declaration and assignment
// - Performed on: n/a
// - Side effect: none
// - Return value: undefined (variable declaration always undefined)
// - Return value used?: no

// Action: method call (forEach)
// - Performed on: the outer array
// - Side effect: none
// - Return value: undefined
// - Return value used?: yes - assigned to myArr

// Action: outer callback execution
// Performed on: each sub-array
// Side effect: none
// Return value: [undefined, undefined]
// Return value used?: no

// Action: method call (map)
// - Performed on: each sub-array
// - Side effect: none
// - Return value: [undefined, undefined]
// - Return value used?: yes - returned by the outer callback

// Action: inner callback execution
// - Performed on: element of the sub-array in that execution
// - Side effect: none
// - Return value: undefined
// - Return value used?: yes, used by map for transformation

// Action: comparison (>)
// - Performed on: element of sub-array in that execution
// - Side effect: none
// - Return value: boolean
// - Return value used?: yes, evaluated by if

// Action: method call (console.log)
// - Performed on: element of subarray that evaluate to >5
// - Side effect: outputs string value of element
// - Return value: undefined
// - Return value used?: yes - to determine return value of inner callback

// ----------

// EXAMPLE 5

[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

// Action: method call (map)
// - Performed on: [[1, 2], [3, 4]] (original array)
// - Side effect: none
// - Return value: new transformed sub-array
// - Return value used: no

// Action: outer callback execution
// - Performed on: each sub-array [1,2], [3, 4]
// - Side effect: none
// - Return value: new transformed sub-array
// - Return value used: yes - used by top-level map for transformation

// Action: method call (map)
// - Performed on: each sub-array
// - Side effect: none
// - Return value: new transformed sub-array
// - Return value used?: yes - returned by the outer callback

// Action: inner callback execution
// - Performed on: element of the sub-array in that iteration
// - Side effect: none
// - Return value: a number
// - Return value used?: yes - used by inner map for transformation

// Action: num * 2
// - Performed on: value of num parameter
// - Side effect: none
// - Return value: a number
// - Return value used?: yes, returned by inner callback

// ----------

// EXAMPLE 6

[{ a: 'ant', b: 'elephant' }, {c: 'cat', d: 'dog'}].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// Action: method call (filter)
// - Performed on: array of objects
// - Side effect: none
// - Return value: new array of objects where the first letter of the value matches the key
// - Return value used?: no

// Action: callback execution
// - Performed on: each object in the array
// - Side effect: none
// - Return value: objects where the every first letter of value matchees key
// - Return value used?: yes - used to create new array of objects

// Action: method call (Object.keys)
// - Performed on: each object in the array
// - Side effect: none
// - Return value: objects where the first letter of each value matches the key
// - Return value used?: yes - returned by callback

// Action: method call (every)
// - Performed on: array of object keys
// - Side effect: none
// - Return value: boolean - true if every value starts with same letter as key
// - Return value used?: yes - returned by callback

// Action: callback execution
// - Performed on: each key in object
// - Side effect: none
// - Return value: boolean - true for each element where first letter of value is key
// - Return value used?: yes - used in .every

// Action: object key reference
// - Performed on: object
// - Side effect: none
// - Return value: key of object
// - Return value used?: yes - to run comparison on key

// Action: string [0] reference
// - Performed on: string with key
// - Side effect: none
// - Return value: first letter of string
// - Return value used?: yes - to check if equals key

// Action: comparison
// - Performed on: first letter of each string in value of k/v pair of object
// - Side effect: none
// - Return value: boolean
// - Return value used?: yes - to check every true/false

// ----------

// EXAMPLE 7

[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});

// Action: method call (map)
// - Performed on: original array
// - Side effect: none
// - Return value: array of arrays
// - Return value used?: no

// Action: outer callback execution
// - Performed on: each sub-array
// - Return value: transformed array
// - Return value used?: yes - used by map for transformation

// Action: method call (filter)
// - Performed on: each sub-array
// - Side effect: none
// - Return value: new filtered array
// - Return value used?: yes - returned to outer callback function

// Action: inner callback execution
// - Performed on: each item of array (sub-array)
// - Side effect: none
// - Return value: number or string
// - Return value used?: yes - used by filter for filtering

// Action: comparison (typeof // ===)
// - Performed on: each item of sub-array
// - Side effect: none
// - Return value: boolean
// - Return value used: yes - used by if statement

// Action: comparison (>)
// - Performed on: numbers in sub-array
// - Side effect: none
// - Return value: boolean
// - Return value used?: yes - returned to filter

// Action: comparison (typeof !== 'number')
// - Performed on: each item of sub-array
// - Side effect: none
// - Return value: boolean
// - Return value used?: yes - used by if/else

// Action: comparison (<)
// - Performed on: strings in sub-array
// - Side effect: none
// - Return value: boolean
// - Return value used?: yes - returned to filter

// ----------

// EXAMPLE 8

// [ [ [1], [2], [3], [4] ], [ ['a'], ['b'], ['c'] ] ]

[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// ----------

// EXAMPLE 9

[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') {
      return elem + 1;
    } else {
      return elem.map(number => number + 1);
    }
  });
});

// Action: method call (map)
// - Performed on: original array
// - Side effect: none
// - Return value: transformed array [[2, 3], [4, 5]], [6, 7]
// - Return value used?: no

// Action: outer callback execution
// - Performed on: each sub-array of
// - Side effect: none
// - Return value: transformed array
// - Return value used: yes - by map