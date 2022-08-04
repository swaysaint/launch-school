// RESERVED KEYWORDS
//
// We have been asked to implement a function that determines whether or not a
// given word is a reserved keyword. We wrote the isReserved function below
// along with some test cases, but we aren't seeing the expected result. Why
// not? Fix the code so that it behaves as intended.

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  let resKW = false;
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      resKW = true;
    }
  });
  return resKW;
}

function isReserved2(name) {
  return RESERVED_KEYWORDS.some(reserved => name === reserved);
}

return isReserved3(name) {
  return RESERVED_KEYWORDS.includes(name);
}

// forEach always returns undefined. Either declare a bool variable outside of
// the forEach and change it when name === reserved. Or use another method like
// checking the length of .filter matched to resKw, etc. Use some..

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true