// NAME SWAPPING
//
// Write a function that takes a string argument consisting of a first name, a
// space, and a last name, and returns a new string consisting of the last name,
// a comma, a space, and the first name.

function swapName(name) {
  let lastName = name.split(' ')[name.split(' ').length - 1];
  let firstName = name.split(' ').slice(0, -1).join(' ');
  return `${lastName}, ${firstName}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe")
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"