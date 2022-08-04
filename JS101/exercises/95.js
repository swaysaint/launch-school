const LOOKUP_TABLE = {};
function fibonacci(limit) {
  if (limit < 3) {
    return 1;
  } else if (LOOKUP_TABLE[limit]) {
    return LOOKUP_TABLE[limit];
  } else {
    LOOKUP_TABLE[limit] = fibonacci(limit - 1) + fibonacci(limit - 2);
    return LOOKUP_TABLE[limit];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));    // 6765

