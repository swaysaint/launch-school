/* Question 1:
Will the following functions return the same results?
 */

function first() {
  return {
    pop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/* Answer: They will not return the same results. The first function returns the
object with key pop1 and value "hi there". The second function, because the
opening curly bracket is on a separate line, means the prior return function,
even though there is no semi-colon, is executed as an independent statemtn.
 */