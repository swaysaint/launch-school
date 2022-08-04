// Practice Problem 3:
// The following code differs slightly from the above code.
// What is the return value of *map* in this case? Why?

[1, 2, 3].map(num => num * num);

// Answer: [1, 4, 9]. Because this is handled in one statement, a separate
// return statement is not needed. A new array is returned with the square
// of each number.