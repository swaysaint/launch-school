// ALL SUBSTRINGS
//
// Write a function that returns a list of all substrings of a string. Order the
// returned list by where in the string the substring begins. This means that
// all substrings that start at index position 0 should come first, then all
// substrings that start at index position 1, and so on. Since multiple
// substrings will occur at each position, return the substrings at a given
// index from shortest to longest.
//
// You may (and should) use the leadingSubstrings function you wrote in the
// previous exercise.

function substrings(str) {
  return [...str].reduce((result, _, idx) => {
    return result.concat(leadingSubstrings(str.substring(idx)));
  }, []);
}

function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.substring(0, idx + 1))
    .sort((a, b) => a.length - b.length);
}

console.log(substrings('abcde'));