// FIBONACCI NUMBERS (RECURSION)
//
// The Fibonacci series is a sequence of numbers in which each number is the sum
// of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The
// third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5,
// and so on. In mathematical terms, this can be represented as:
//
// F(1) = 1
// F(2) = 1
// F(n) = F(n-1) + F(n-2) where n > 2
//
// This simple sequence can be computed using a recursive function. A recursive
// function is one in which the function calls itself.
//
// A good recursive function has three primary qualities:
//
// 1. It calls itself at least once.
// 2. It has an ending condition (e.g. if (num ===1) in the shown sum function).
// 3. The results of each recursion are used in each step - e.g.,
//    num + sum(num - 1) uses sum(num - 1)
//
// Write a recursive function that computes the nth Fibonacci number, where nth
// is an argument passed to that function.
//
// NOTE: This exercises verges on the advanced level of exercises, so do not
// be discouraged if you are not able to solve it on your own; recursion is
// tricky, and even experienced developers can have trouble dealing with it.

function fibonacci(limit) {
  const FIRST_TWO = 1;
  if (limit < 3) {
    return FIRST_TWO;
  } else {
    return fibonacci(limit - 1) + fibonacci(limit - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(78));      // 6765