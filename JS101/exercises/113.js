// DIAMONDS
//
// Write a function that displays a four-pointed diamond in an n x n grid,
// where n is an odd integer supplied as an argument to the function. You may
// assume that the argument will always be an odd integer.

function diamond(lines) {
  let midLine = Math.ceil(lines / 2);
  let line = 1;
  let starCount = 1;
  while (line < midLine) {
    console.log(' '.repeat(midLine - line) + '*'.repeat(starCount));
    starCount += 2;
    line += 1;
  }
  console.log('*'.repeat(starCount));
  starCount -= 2;
  line += 1;
  while (line <= lines) {
    console.log(' '.repeat(line - midLine) + '*'.repeat(starCount));
    starCount -= 2;
    line += 1;
  }
}

function hollowDiamond(lines) {
  let midLine = Math.ceil(lines / 2);
  let line = 1;
  let starCount = 1;
  while (line < midLine) {
    if (line === 1) {
      console.log(' '.repeat(midLine - line) + '*');
    } else {
      console.log(
        ' '.repeat(midLine - line) + '*' + ' '.repeat(starCount - 2) + '*');
    }
    starCount += 2;
    line += 1;
  }
  console.log('*' + ' '.repeat(starCount - 2) + '*');
  starCount -= 2;
  line += 1;
  while (line <= lines) {
    if (line === lines) {
      console.log(' '.repeat(line - midLine) + '*');
    } else {
      console.log(
        ' '.repeat(line - midLine) + '*' + ' '.repeat(starCount - 2) + '*');
    }
    starCount -= 2;
    line += 1;
  }
}
/*hollowDiamond(1);
diamond(3);*/
hollowDiamond(9);