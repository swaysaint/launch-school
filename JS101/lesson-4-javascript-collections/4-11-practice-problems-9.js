// Practice Problem 9:
// Add up all the ages from the Munster family object.

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let munsterAges = Object.values(ages);
let summedAges = munsterAges.reduce(
  (agesSum, currentAge) => agesSum + currentAge, 0);
console.log(summedAges);