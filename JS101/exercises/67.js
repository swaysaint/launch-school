// MATCHING PARENTHESES?
//
// Write a function that takes a string as an argument and returns true if all
// parentheses in the string are properly balanced, false otherwise. To be
// properly balanced, parentheses must occur in matching '(' and ')' pairs.

function isBalanced(str) {
  let lefts = [];
  let rights = [];
  str.split('').forEach((char, idx) => {
    if (char === '(') {
      lefts.push(idx);
    } else if (char === ')') {
      rights.push(idx);
    }
  });
  return (lefts.length === rights.length) &&
    rights.every((num, idx) => num > lefts[idx]);
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);


/*
return str.split('').filter(char => char === "(").length ===
  str.split('').filter(char => char === ")").length;
*/
