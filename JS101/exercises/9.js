/* This is a continuation of the previous exercise. The British Empire adopted
the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used
the Julian Calendar. Under the Julian Calendar, leap years occur in any year
that is evenly divisible by 4.

Using this information, update the function from the previous exercise to
determine the years both before and after 1752.
 */

function isLeapYear(year) {
  if (year >= 1752) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        return year % 400 === 0;
      }
      return true;
    } else {
      return false;
    }
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true