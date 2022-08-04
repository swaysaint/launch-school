// CUTE ANGLES
//
// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees and returns a string representing that angle in
// degrees, minutes, and seconds. You should use a degree symbol (˚) to
// represent degrees, a single quote (') to represent minutes, and a double
// quote (") to represent seconds. There are 60 minutes in a degree, and 60
// seconds in a minute.

function numToString(num) {
  return String(num).length < 2 ? '0' + String(num) : String(num);
}

function makeAngle(num) {
  return num % 360;
}

function dms(float) {
  let num = makeAngle(float);
  let degrees;
  let minutes;
  let seconds;
  if (num > 0) {
    degrees = Math.floor(num);
    minutes = Math.floor((num - degrees) * 60);
    seconds = Math.floor((((num - degrees) * 60) - minutes) * 60);
  } else {
    degrees = Math.ceil(360 + num);
    minutes = Math.abs(Math.ceil((360 + num - degrees) * 60));
    seconds = Math.floor((Math.abs((360 + num - degrees) * 60) - minutes) * 60);
  }
  return `${degrees}˚${numToString(minutes)}'${numToString(
    seconds)}"`;
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1.95));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"