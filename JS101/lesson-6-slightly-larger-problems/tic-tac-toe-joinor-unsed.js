function joinOr(arr = [], delimiter = ', ', finalDelimiter = 'or') {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return String(arr[0]);
  } else if (arr.length === 2) {
    return arr[0] + ' ' + finalDelimiter + ' ' + arr[1];
  } else {
    return arr
      .slice(0, arr.length - 1)
      .join(delimiter) + delimiter + finalDelimiter + ' ' + arr[arr.length - 1];
  }
}

joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

