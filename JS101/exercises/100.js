// NEXT FEATURED NUMBER HIGHER THAN A GIVEN VALUE
//
// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occurring exactly once each. For
// example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
// (it is not a multiplier of 7), and 133 is not (the digit 3 appears twice).
//
// Write a function that takes an integer as an argument and returns the next
// featured number greater than the integer. Issue an error message if there is
// no next featured number.
//
// NOTE: The largest possible featured number is 9876543201.

function featured(num) {
  const MAX_FEATURED = 9876543210;
  let count = num + 1;
  while (true) {
    if (count > MAX_FEATURED) {
      return 'There is no possible number that fulfills those requirements';
    }
    if (isFeatured(count)) {
      return count;
    } else {
      count++;
    }
  }
}

function isFeatured(num) {
  const odd = num % 2 === 1;
  const multipleOf7 = num % 7 === 0;
  const hasRepeatDigits = (num) => {
    const numArray = String(num).split('');
    return numArray.some((digit, idx) => {
      return numArray.slice(0, idx).concat(numArray.slice(idx + 1))
        .includes(digit);
    });
  };
  return odd && multipleOf7 && !hasRepeatDigits(num);
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