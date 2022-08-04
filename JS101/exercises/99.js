// UNLUCKY DAYS
//
// Some people believe that Fridays that fall on the 13th day of the month are
// unlucky days. Write a function that takes a year as an argument and returns
// the number of Friday the 13ths in that year. You may assume that the year is
// greater than 1752, which is when the United Kingdom adopted the modern
// Gregorian Calendar. You may assume that the same calendar will remain in use
// for the foreseeable future.

function fridayThe13ths(year) {
  let count13th = 0;
  for (let month = 1; month <= 12; month++) {
    let dayOfWeek = new Date(year, month - 1, 13).getDay();
    if (dayOfWeek === 5) {
      count13th++;
    }
  }
  return count13th;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2