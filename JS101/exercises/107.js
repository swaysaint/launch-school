// ROTATING MATRIX
//
// As we saw in the previous exercises, a matrix can be represented by an array
// of arrays.
//
// A 90-degree rotation of a matrix produces a new matrix in which each side of
// the matrix is rotated clockwise by 90 degrees. For example, a 90-degree
// rotation of the following matrix:
//
// 1 5 8
// 4 7 2
// 3 9 6
//
// is:
//
// 3 4 1
// 9 7 5
// 6 2 8
//
// A 90-degree rotation of a non-square matrix is similar. For example, given
// the following matrix:
//
// 3 4 1
// 9 7 5
// A 90-degree rotation is
//
// 9 3
// 7 4
// 5 1
//
// Write a function that takes an arbitrary MxN matrix, rotates it clockwise by
// 90-degrees as described above, and returns the result as a new matrix. The
// function should not mutate the original matrix.

function rotate90(matrix) {
  let result = [];
  for (let row = matrix.length - 1; row >= 0; row--) {
    for (let col = 0; col < matrix[row].length; col++) {
      (result[col] ??= []).push(matrix[row][col]);
    }
  }
  return result;
}
/*
[0, 0] -> [0, 2] first row sticks last column increases row
[0, 1] -> [1, 2]
[0, 2] -> [2, 2]
[1, 0] -> [0, 1] second row sticks second column increases row
[1, 1] -> [1. 1]
[1, 2] -> [2. 1]
[2, 0] -> [0, 0] third row sticks first column increases row
[2, 1] -> [1, 0]
[2, 2] -> [2, 0]*/

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]