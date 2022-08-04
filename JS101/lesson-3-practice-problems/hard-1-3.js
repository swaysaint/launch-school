/* Question 3: Given the following similar sets of code, what will each code
snippet print?
 */

// A:

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is ${two}`);
console.log(`three is ${three}`);


/* Answer: one, two, three. This is because the local variables shadow the
global variables. The local variables are pointing to the global variable
references, but nothing in the global variables is getting reassigned.
 */

// B:

function messWithVars2(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one2 = ["one"];
let two2 = ["two"];
let three2 = ["three"];

messWithVars2(one2, two2, three2);

console.log(`one is ${one2}`);
console.log(`two is ${two2}`);
console.log(`three is ${three2}`);

/* Answer: one, two, three. The local variables shadow the global variables and
are getting assigned to new arrays (objects).
 */

// C:

function messWithVars3(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one3 = ["one"];
let two3 = ["two"];
let three3 = ["three"];

messWithVars3(one3, two3, three3);

console.log(`one is ${one3}`);
console.log(`two is ${two3}`);
console.log(`three is ${three3}`);

/* Answer: splice mutates an array. This function will return two, three, one.
 */