function fibonacci(limit) {
  let prevPrev = 1;
  let prev = 1;
  let result = 1;
  for (let count = 3; count <= limit; count++) {
    result = (prev + prevPrev);
    prevPrev = prev;
    prev = result;
  }
  return result;
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(10000));      // 6765