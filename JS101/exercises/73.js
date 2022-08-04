// PALINDROMIC SUBSTRINGS
//
// Write a function that returns a list of all palindromic substrings of a
// string. That is, each substring must consist of a sequence of characters
// that reads the same forward and backward. The substrings in the returned list
// should be sorted by their order of appearance in the input string. Duplicate
// substrings should be included multiple times.
//
// You may (and should) use the substrings function you wrote in the previous
// exercise.
//
// For the purpose of this exercise, you should consider all characters and pay
// attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-ba'
// are not. In addition, assume that single characters are not palindromes.

function palindromes(str) {
  return substrings(str).filter(isAPalindrome);
}

function isAPalindrome(str) {
  return str.length > 1 && str === str.split('').reverse().join('');
}

function substrings(str) {
  return [...str].reduce((result, _, idx) => {
    return result.concat(leadingSubstrings(str.substring(idx)));
  }, []);
}

function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.substring(0, idx + 1))
    .sort((a, b) => a.length - b.length);
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));