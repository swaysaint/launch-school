// How would you sort the following array by the lengths of each word?

let words = ['go', 'ahead', 'and', 'jump'];
let wordsSortedByLength = words.sort((a, b) => a.length - b.length);

console.log(wordsSortedByLength);

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
let scoreSortedByTotal = scores.sort((a, b) => {
  let totalAScore = a.reduce((number, next) => number + next);
  let totalBScore = b.reduce((number, next) => number + next);

  return totalAScore - totalBScore;
});

console.log(scoreSortedByTotal);