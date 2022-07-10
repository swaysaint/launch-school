function numRowSum(rowNumber) {
  return (((rowNumber * rowNumber) - (rowNumber - 2)) * (rowNumber + 1)) - 2;
}

function numRowSum2(rowNumber) {
  let rows = [];
  for (let row = 0; row < rowNumber; row++) {
    rows.push([]);
  }
  let plusTwo = 2;
  for (let row = 0; row < rowNumber; row++) {
    for (let times = 0; times <= row; times++) {
      rows[row].push(plusTwo);
      plusTwo += 2;
    }
  }
  return rows[rowNumber - 1].reduce((a, b) => a + b);
}

/*

1: 2 || sum = 2 = f*1
2: 4 6 || sum = 10 = f*2+2
3: 8 10 12 || sum = 30 || 2^3 = f*4-2
4: 14 16 18 20 || sum = 68 = f*5-2
5: 22 24 26 28 30 || sum = 130 = f*6-2
6: 32 34 36 38 40 42
7: 44

 */

console.log(numRowSum(1));
console.log(numRowSum(2));
console.log(numRowSum(4));
console.log(numRowSum2(69));

console.log(numRowSum2(1));
console.log(numRowSum2(2));
console.log(numRowSum2(4));
console.log(numRowSum2(69));