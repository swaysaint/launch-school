// Practice Problem 1:
// What is the return value of the *filter* method call below? Why?

[1, 2, 3].filter(num => 'hi');

// Answer: [1, 2, 3] - filter checks for truthiness. 'hi' is truthy.