// AFTER MIDNIGHT (PART 1)
//
// The time of day can be represented as the number of minutes before or after
// midnight. If the number of minutes is positive, the time is after midnight.
// If the number of minutes is negative, the time is before midnight.
//
// Write a function that takes a time using this minute-based format and returns
// the time of day in 24-hour format (hh:mm). Your function should work with any
// integer input.
//
// You may not use javascript's Date class methods.

function timeToString(hh, mm) {
  hh = String(hh).length < 2 ? '0' + String(hh) : String(hh);
  mm = String(mm).length < 2 ? '0' + String(mm) : String(mm);
  return `${hh}:${mm}`;
}

function timeOfDay(time) {
  while (time >= 1440) {
    time -= 1440;
  }
  while (time <= -1440) {
    time += 1440;
  }
  let mm = time >= 0 ? time % 60 : 60 + (time % 60);
  let hh = time >= 0 ? Math.floor((time - mm) / 60) :
    Math.floor(24 + ((time - mm) / 60));
  console.log(`${hh} ${mm}`);
  return timeToString(hh, mm);
}

// Take pos or neg int (time)
// Convert time to hh:mm

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");