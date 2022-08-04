function copyNonDupesTo(resultArr, arr) {
  arr.forEach(val => {
    if (!resultArr.includes(val)) {
      resultArr.push(val);
    }
  });
}

function union(...args) {
  const resultArray = [];
  args.forEach(arg => copyNonDupesTo(resultArray, arg));
  return resultArray;
}

console.log(union([1, 3, 5, 13], [3, 6, 9], [5, 2, 3, 4, 5]));    // [1, 3, 5, 6, 9]