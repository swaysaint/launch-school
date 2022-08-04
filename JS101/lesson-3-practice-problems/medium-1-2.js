/* Question 2:
Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

Return a new string that swaps the case of all the letters.
 */

let munstersDescription = "The Munsters are creepy and spooky.";

console.log(munstersDescription.split('')
  .map(char => (char === char.toUpperCase() ? char.toLowerCase() : char
    .toUpperCase()).join('')));