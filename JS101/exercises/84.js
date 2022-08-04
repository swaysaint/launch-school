// STAGGERED CAPS (PART 2)
//
// Modify the function from the previous exercise, so it ignores non-alphabetic
// characters when determining whether it should uppercase or lowercase each
// letter. The non-alphabetic characters should still be included in the return
// value; they just don't count when toggling the desired case.

function staggeredCase(str, countNonAlpha = false) {
  if (countNonAlpha) {
    return str
      .split('')
      .map(
        (char, idx) => (idx % 2 === 0 ? char.toUpperCase() :
          char.toLowerCase()))
      .join('');
  } else {
    let needUpper = true;
    return str
      .split('')
      .map((char) => {
        char = char.toLowerCase();
        if (char >= 'a' && char <= 'z') {
          if (needUpper) {
            needUpper = false;
            return char.toUpperCase();
          } else {
            needUpper = true;
            return char.toLowerCase();
          }
        } else {
          return char;
        }
      })
      .join('');
  }
}

console.log(staggeredCase("I Love Launch School!", false) === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
