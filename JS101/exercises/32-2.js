function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

function cleanUp(text) {
  let cleanText = '';
  for (let index = 0; index < text.length; index++) {
    if (isLowerCaseLetter(text[index]) || isUpperCaseLetter(text[index])) {
      cleanText += text[index];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }
  return cleanText;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "