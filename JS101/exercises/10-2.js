function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multiSum(maxValue) {
  let sum = 0;
  for (let num = 1; num <= maxValue; num++) {
    if (isMultiple(num, 3) || isMultiple(num, 5)) {
      sum += num;
    }
  }
  return sum;
}

console.log(multiSum(3));       // 3
console.log(multiSum(5));       // 8
console.log(multiSum(10));      // 33
console.log(multiSum(1000));    // 234168