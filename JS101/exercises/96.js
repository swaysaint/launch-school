// LETTERCASE PERCENTAGE RATIO
//
// Write a function that takes a string and returns an object containing the
// following three properties:
//
// - the percentage of characters in the string that are lowercase letters
// - the percentage of characters that are uppercase letters
// - the percentage of characters that are neither

function letterPercentages(string) {
  let [upper, lower, neither] = [0, 0, 0];
  string.split('').forEach(char => {
    if (isNotChar(char)) {
      neither++;
    } else if (isLowerCase(char)) {
      lower++;
    } else if (isUpperCase(char)) {
      upper++;
    }
  });
  const totalChars = upper + lower + neither;
  return { lowercase: (lower / totalChars * 100).toFixed(2),
    uppercase: (upper / totalChars * 100).toFixed(2),
    neither: (neither / totalChars * 100).toFixed(2) };
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}

function isLowerCase(char) {
  return char === char.toLowerCase();
}

function isNotChar(char) {
  return char.match(/[^a-zA-z]/);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }