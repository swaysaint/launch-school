/* Using the multiply function from the "Multiplying Two Numbers" problem, write
a function that computes the square of its argument (the square is the result of
multiplying a number by itself.
 */

const multiply = (num1, num2) => num1 * num2;

function square(num, power = 2) {
  let accum = num;
  for (let iterator = 1; iterator < power; iterator++) {
    accum = multiply(accum, num);
  }
  return accum;
}

console.log(square(5) === 25);
console.log(square(-8) === 64);
console.log(square(5));
console.log(square(5,3));
console.log(square(5,1));