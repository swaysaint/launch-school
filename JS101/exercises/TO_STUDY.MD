- parseFloat (problem 5)
- ((char >= 'A') && (char <= 'Z'))
- function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
  lowercase: lowercaseChars.length,
  uppercase: uppercaseChars.length,
  neither: neitherChars.length
  };
  }
- function searchWord(word, text) {
  const regex = new RegExp(word, 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
  }
- function searchWord(word, text) {
  let regex = new RegExp(`\\b${word}\\b`, "gi");
  return text.replace(regex, `**${word.toUpperCase()}**`);
  }
- EXERCISES - MEDIUM 1 - REVERSE 3
- const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
  };

function wordToDigit(sentence) {
Object.keys(NUM_WORDS).forEach(word => {
let regex = new RegExp(word, 'g');
sentence = sentence.replace(regex, NUM_WORDS[word]);
});

return sentence;
}
- Fibonacci numbers - memoization
- Split by any number of spaces:   .split(/\s+/)
- function triangle(side1, side2, side3) {
  let perimeter = side1 + side2 + side3;
  let longest = Math.max(side1, side2, side3);
  let shortest = Math.min(side1, side2, side3);
  let middle = perimeter - longest - shortest;

  if (isValid(shortest, middle, longest)) {
  return getTriangleType(side1, side2, side3);
  } else {
  return "invalid";
  }
  }

function isValid(shortest, middle, longest) {
return shortest > 0 && shortest + middle > longest;
}

function getTriangleType(side1, side2, side3) {
if (side1 === side2 && side2 === side3) {
return "equilateral";
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
return "isosceles";
} else {
return "scalene";
}
}
return thirteenths.reduce((count, day) => {
return day.getDay() === 5 ? (count + 1) : count;
}, 0);

return template.replace(/%{[a-z]+}/g, replaceText);

advanced problem Rotating Matrix

advanced problem merge sort

binary search

egyptian fractions

function range(start, end = -1) {
if (end === -1) {
end = start;
start = 0;
}

let pad = (string, n) => {
while (string.length < n) {
string = "0" + string;
}
return string;
};

The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

Interpretive problem solving Seeing Stars