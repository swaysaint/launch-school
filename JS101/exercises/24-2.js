function crunch(text) {
  let crunchText = '';
  for (let index = 0; index < text.length; index++) {
    if (text[index] !== text[index - 1]) {
      crunchText += text[index];
    }
  }
  return crunchText;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""