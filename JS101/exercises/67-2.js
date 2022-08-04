function isBalanced(str) {
  let parens = 0;
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === '(') {
      parens++;
    } else if (str[idx] === ')') {
      parens--;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);