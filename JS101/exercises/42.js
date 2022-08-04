// LETTER COUNTER (PART 2)
//
// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size. For instance, the word size of "it's"
// is 3, not 4.

function wordSizes(str) {
  let wordArr = str.toLowerCase().replace(/[^a-z ]/g, '').split(' ');
  let wordObj = {};
  wordArr.forEach(
    word => {
      if (word.length !== 0) {
        (wordObj[word.length] = (wordObj[word.length] + 1) || 1);
      }
    });
  return wordObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}