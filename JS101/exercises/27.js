// FIBONACCI NUMBER LOCATION BY LENGTH

function findFibonacciIndexByLength(bigInt) {
  let fibPrev2 = 1n;
  let fibPrev1 = 1n;
  let fib;
  let count = 2n;
  while (true) {
    fib = fibPrev1 + fibPrev2;
    fibPrev2 = fibPrev1;
    fibPrev1 = fib;
    count++;
    if (String(fib).length >= bigInt) break;
  }
  return count;
}

console.log(findFibonacciIndexByLength(2n));  // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n));   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(16n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));
console.log(findFibonacciIndexByLength(10000n));