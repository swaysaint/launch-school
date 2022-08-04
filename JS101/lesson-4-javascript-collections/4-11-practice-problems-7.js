// Practice Problem 7:
// What is the return value of *map* in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// Answer: ['undefined', 'bear']. .map is used for transformation, unlike
// .filter. Since nothing is being called on 'ant' (because its length <3), it
// returns undefined. The size of a mapped array is the same as the original.

// Note: When a function doesn't explicitly return something, it implicitly
// returns undefined.