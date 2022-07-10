// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case-sensitive.

// Reqs: Find all palindromic substrings regardless of length
// Return an array of those setrings through function palindomeSubstrings
// Blank string should return blank array
// Same letters may be included many times (i.e abba -> ab, abba)
// Palindromes are case sensitive

// Algorithm (palindromeSubstrings):
// - declare a result variable and initialize it to an empty array
// - create an array named substrArray that contains all of the substrings of
//   the input string that are at least 2 characters long.
// - loop through the words in the substrArray array.
// - if the word is a palindrome, append it to the result array
// - return the result array

// Algorithm (substrings):
// - for each starting index from 0 through the next to the last index position
// ---- for each substring length from 2 until there are no substrings of that
// **** length
// -------- extract the substring of the indicated length starting at the
// ******** indicated index position
// ---- end of inner loop
// end of outer loop

// Algorithm (isPalindrom):
// - Check whether the string value is equal to the string value reversed

function substrings(str) {
  let result = [];
  for (let charIterator = 0; charIterator < str.length - 1; charIterator++) {
    for (let subStrLength = charIterator + 2; subStrLength <= str.length;
      subStrLength++) {
      result.push(str.substring(charIterator,subStrLength));
    }
  }
  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArray = substrings(str);
  substringsArray.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });
  return result;
}

//'halo' -> ha | hal | halo | al | alo | lo


// Test cases:

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
// should return: ["ili"]
//
console.log(palindromeSubstrings("abcddcbA"));
// should return: ["bcddcb", "cddc", "dd"]
//
console.log(palindromeSubstrings("palindrome"));
// should log: []
//
console.log(palindromeSubstrings(""));
// should log: []