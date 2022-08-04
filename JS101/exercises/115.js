// SEEING STARS
//
// Write a function that displays an 8-pointed star in an NxN grid, where N is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when N is 7).

function star(lines) {
  const midLine = Math.ceil(lines / 2);
  let leftPad = 0;
  let midPad = (lines - 3) / 2;
  let count = 1;
  while (count <= lines) {
    if (count === midLine) {
      console.log('*'.repeat(lines));
    } else {
      console.log(' '.repeat(leftPad) + '*' + ' '.repeat(midPad) + '*' +
                    ' '.repeat(midPad) + '*' + ' '.repeat(midPad));
    }
    if (count < midLine) {
      leftPad++;
      midPad--;
    } else if (count >= midLine) {
      leftPad--;
      midPad++;
    }
    count++;
  }
}

star(21);