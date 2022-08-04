// Practice Problem 2:
// What is the return value of *map* in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

// Answer: [undefined, undefined, undefined].
// There is no return value to the callback function.