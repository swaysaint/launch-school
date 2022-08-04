// EGYPTIAN FRACTIONS
//
// A Rational Number is any number that can be represented as the result of the
// division between two integers, e.g., 1/3, 3/2, 22/7, etc. The number to the
// left is called the numerator, and the number to the right is called the
// denominator.
//
// A Unit Fraction is a rational number where the numerator is 1.
//
// An Egyptian Fraction is the sum of a series of distinct unit fractions (no
// two are the same), such as 1/2 + 1/3 + 1/13 + 1/15
//
// Every positive rational number can be written as an Egyptian fraction. For
// example:
//
// 2 = 1/1 + 1/2 + 1/3 + 1/6
//
// Write two functions: one that takes a Rational number as an argument, and
// returns an Array of the denominators that are part of an Egyptian fraction
// representation of the number, and another that takes an Array of numbers in
// the same format, and calculates the resulting Rational number.
//
// You will need to install the infusion/Fraction.js module with the npm install
// infusion/Fraction.js command. Read about that package here.

const Fraction = require('fraction.js');

function egyptian(frac) {
  let result = [];
  let unitDenominator = 1;
  while (frac > 0) {
    let unitFraction = new Fraction(1, unitDenominator);
    if (unitFraction <= frac) {
      frac = frac.sub(unitFraction);
      result.push(unitDenominator);
    }
    unitDenominator++;
  }
  return result;
}


function unegyptian(arr) {
  return arr.reduce((accum, num) => accum + new Fraction(1, num), new Fraction(0));
}

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]
console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3
/*
function egyptian(frac) {
  const result = [];
  let count = 1;
  while (true) {
    if (frac.n === 1 && frac.n < frac.d && !result.includes(frac.d)) {
      result.push(frac.d);
      break;
    }
    let fracPiece = new Fraction(1, count);
    let remainder = frac.sub(fracPiece);
    result.push(fracPiece.d);frac = remainder;
    count++;
  }
  return result;
}*/
