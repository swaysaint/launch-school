//BANNERIZER
/* Write a function that will take a short line of text, and write it to the
console log within a box.
 */

function logInBox(text, maxWidth) {
  if (text.length > maxWidth) {
    text = text.slice(0, maxWidth);
  }
  console.log('+' + '-'.repeat(text.length + 2) + '+');
  console.log('|' + ' '.repeat(text.length + 2) + '|');
  console.log(`| ${text} |`);
  console.log('|' + ' '.repeat(text.length + 2) + '|');
  console.log('+' + '-'.repeat(text.length + 2) + '+');
}

function logInBoxWithWordWrap(text, maxWidth) {
  if (text.length < maxWidth) {
    console.log('+' + '-'.repeat(text.length + 2) + '+');
    console.log('|' + ' '.repeat(text.length + 2) + '|');
    console.log(`| ${text} |`);
    console.log('|' + ' '.repeat(text.length + 2) + '|');
    console.log('+' + '-'.repeat(text.length + 2) + '+');
  } else {
    let textArr = [];
    while (text.length > maxWidth) {
      console.log(`text.length is ${text.length} and maxWidth = ${maxWidth}`);
      textArr.push(text.slice(0, maxWidth));
      text = text.slice(maxWidth);
    }
    textArr.push(text);
    console.log('+' + '-'.repeat(maxWidth + 2) + '+');
    console.log('|' + ' '.repeat(maxWidth + 2) + '|');
    textArr.forEach(ele => {
      console.log(`| ${ele} |`);
    });
    console.log('|' + ' '.repeat(maxWidth + 2) + '|');
    console.log('+' + '-'.repeat(maxWidth + 2) + '+');
  }
}

logInBox('parpasdjikjansd')
logInBox('Somewhere over the rainbow', 13);
logInBox("What's up doc?", 5);

logInBoxWithWordWrap('Somewhere over the rainbow', 13);