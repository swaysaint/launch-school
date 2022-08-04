// PALINDROMIC STRINGS (PART 2)
//
// Write another function that returns true if the string passed as an argument
// is a palindrome, or false otherwise. This time, however, your function should
// be case-insensitive, and should ignore all non-alphanumeric characters.
// If you wish, you may simplify things by calling the isPalindrome function you
// wrote in the previous exercise.

const validAlphaChars = 'ABCDEFGHIKJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const validNumChars = '0123456789';

function isRealPalindrome(str) {
  let strArr = str
    .toLowerCase()
    .split('')
    .filter(
      char => validAlphaChars.includes(char) ||
        validNumChars.includes(char));
  return strArr.join('') === strArr.reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false