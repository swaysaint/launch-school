function diamond(n) {
  numberSequence(n).forEach(number => {
    console.log(`${" ".repeat((n - number) / 2)}${"*".repeat(number)}`);
  });
}

function numberSequence(n) {
  let result = [];
  let increment = 2;
  let number = 1;
  while (number > 0) {
    result.push(number);
    if (number === n) {
      increment -= 2;
    }
    number += increment;
  }
  return result;
}

diamond(9);