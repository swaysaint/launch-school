// GROCERY LIST
//
// Write a function that takes a grocer list in a two-dimensional array and
// returns a one-dimensional array. Each element in the grocery list contains
// a fruit name and a number that represents the desired quantity of that fruit.
// The output array is such that each fruit name appears the number of times
// equal to its desired quantity.


function buyFruit(arr) {
  return arr.reduce((list, currentFruit) => {
    for (let count = 0; count < currentFruit[1]; count++) {
      list.push(currentFruit[0]);
    }
    return list;
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));