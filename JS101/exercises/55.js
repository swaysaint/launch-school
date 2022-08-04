// AFTER MIDNIGHT (PART 2)
//
// As seen in the previous exercise, the time of day can be represented as the
// number of minutes before or after midnight. If the number of minutes is
// positive, the time is after midnight. If the number of minutes is negative,
// the time is before midnight.
//
// Write two functions that each take a time of day in 24 hour format, and
// return the number of minutes before and after midnight, respectively. Both
// functions should return a value in the range 0..1439.
//
// You may not use javascript's Date class methods.

function getHoursAndMinutes(time) {
  return [Number(time.slice(0, 2)), Number(time.slice(3))];
}

function afterMidnight(time) {
  let [hh, mm] = getHoursAndMinutes(time);
  return ((hh * 60) + mm) % 1440;
}

function beforeMidnight(time) {
  let [hh, mm] = getHoursAndMinutes(time);
  if (hh === 0 && mm === 0) return 0;
  else return 1440 - (hh * 60) - mm;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);