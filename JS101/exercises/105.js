// TRANSPOSE 3x3 MATRIX
//
// A 3x3 matrix can be represented by an array of arrays: an outer array
// containing three sub arrays that each contain three elements. For example,
// the 3x3 matrix shown below:
//
// 1 5 8
// 4 7 2
// 3 9 6
//
// Is represented by the following array of arrays:
// let matrix = [
//  [1, 5, 8],
//  [4, 7, 2],
//  [3, 9, 6],
// ];
//
// The transpoe of a 3x3 matrix is the matrix that results from exchanging the
// rows and columns of the original matrix. For example, the transposition of
// the matrix shown above is:
//
// 1 4 3
// 5 7 9
// 8 2 6
//
// Write a function that takes an array of arrays that represents a 3x3 matrix
// and returns the transpose of the matrix. You should implement the function
// on your own, without using any external libraries.
//
// Take care not to modify the original matrix - your function must produce a
// new matrix and leave the input matrix unchanged.

function transpose(matrix) {
  let result = [];
  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      (result[colIdx] ??= []).push(matrix[rowIdx][colIdx]);
    }
  }
  return result;
}

function transposeInPlace(matrix) {
  for (let row = 0; row < 3; row++) {
    for (let col = row; col < matrix[row].length; col++) {
      [ matrix[row][col], matrix[col][row] ] =
        [ matrix[col][row], matrix[row][col] ];
    }
  }
  return matrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transposeInPlace(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]