/* Question 2: What does the last line in the following code output?
 */

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray);
console.log(object);

/* Answer: numArray outputs [1, 2]. objects outputs { first: [1, 2] }. This is
because arrays are objects and use pass by reference.
 */

/* Note: we could use slice or concat on the array in object to copy the
original array instead
 */