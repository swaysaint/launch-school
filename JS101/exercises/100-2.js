function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);
  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }
    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);
  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);
  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};
  for (let idx = 0; idx < digits.length; idx++) {
    if (seen[digits[idx]]) {
      return false;
    }
    seen[digits[idx]] = true;
  }
  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."