// TRIANGLE SIDES
//
// A triangle is classified as follows:
//
// - Equilateral: All three sides are of equal length.
// - Isosceles: Two sides are of equal length, while the third is different.
// - Scalene: All three sides are of different lengths.
//
// To be a valid triangle, the sum of the lengths of the two shortest sides
// must be greater than the length of the longest side, and every side must have
// a length greater than 0. If either of these conditions are not satisfied, a
// triangle is invalid.
//
// Write a function that takes the lengths of the three sides of a triangle as
// arguments and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or
// 'invalid.

function triangle(s1, s2, s3) {
  const sideArr = [s1, s2, s3];
  const sortedSides = sideArr.sort();
  if ((sideArr.filter(side => side === 0).length > 0) ||
    sortedSides[2] > (sortedSides[0] + sortedSides[1])) {
    return 'invalid';
  } else if (sideArr.every(side => side === sideArr[0])) {
    return 'equilateral';
  } else if (sortedSides[0] === sortedSides[1] ||
    sortedSides[1] === sortedSides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"