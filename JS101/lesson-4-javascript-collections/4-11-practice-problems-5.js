// Practice Problem 5:
// What is the callback's return value in the following code? Also, what is the
// return value of *every* in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

// Answer: The callback returns 2, 4, and 6. num = num * 2 is an assignment
// expression and will evaluate as the expression on the right-hand side of the
// assignment and that is what gets return in each iteration. All numbers are
// truthy, so .every will return truthy.