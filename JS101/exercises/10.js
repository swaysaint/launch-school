/* Write a function that computes the sum of all numbers between 1 and some
other number, inclusive, that are multiplies of 3 or 5. For instance, if the
supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15
+ 18 + 20).

You may assume that the number passed is an integer greater than 1.
 */

function multiSum(num) {
  let sum = 0;
  for (let accum = 1; accum <= num; accum += 1) {
    if (accum % 3 === 0 || accum % 5 === 0)  {
      sum += accum;
    }
  }
  return sum;
}

console.log(multiSum(3));       // 3
console.log(multiSum(5));       // 8
console.log(multiSum(10));      // 33
console.log(multiSum(1000));    // 234168