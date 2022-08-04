/* Question 7:
What is the output of the following code?
 */

let answer = 42;
function messWith(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWith(answer);

console.log(answer - 8);

/* This will output '34'. The function does not alter 'answer' and 'newAnser'
is never used.
 */