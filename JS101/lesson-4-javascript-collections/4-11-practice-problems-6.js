// Practice Problem 6:
// How does Array.prototype.fill work? Is it distructive? How can we find out?

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

// Answer: Array.prototype.fill changes all elements in an array to a static
// value. The first parameter (1) is the value to change array elements to.
// The second parameter (1) is the array index to start changing from, and the
// third parameter (5), is the end index. This should return [1, 1, 1, 1, 1].
// This method is destructive as per MDN documentation. We can verify this by
// logging arr after running fill.