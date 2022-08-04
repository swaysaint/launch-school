/* Question 1:
Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;

ANSWER = NO

let numbers = [1, 2, 3];
numbers[6]  = 5;
numbers[4];
Will return 'undefined'
 */

/* Question 2: How can you determine whether a given string ends with an
exclamation mark (!)?
 */

let str1 = "Come over here!";
let str2 = "What's up, Doc?";

str1.endsWith('!');
str2.endsWith('!');

/* Question 3: Determine whether the following object of people and their
age contain an entry for 'Spot':
 */

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10};

ages.hasOwnProperty('Spot');

/* Question 4: Using the following string, create a new string that contains all
lowercase letters except for the first character, which should be capitalized.
 */

let munstersDescription = "the Munsters are CREEPY and Spooky.";

munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

/* Question 5: What will the following code output?
 */

console.log(false == '0');
console.log(false === '0');

// True, False

/* Question 6: We have most of the Munster family in our ages object
Add entries for Marilyn and Spot to the object
 */

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10};
let additionalAges = { Marilyn: 22, Spot: 237};

Object.assign(ages, additionalAges);

/* Question 7: Determine whether the name Dino appears in the strings below --
check each string separately.
 */

let str1 = "Few things in life are as important as house training your pet" +
  "dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes('Dino');
str2.includes('Dino');

str1.match('Dino');
str2.match('Dino');

/* Question 8: How can we add the family pet, "Dino", to the following array?
 */

let flinstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flinstones.push("Dino");
flinstones = flinstones.concat("Dino");
flinstones[flinstones.length] = "Dino";

/* Question 9: In the previous problem, our first answer added "Dino" to the
array. How can we add multiple items to our array? ("Dino" and "Hoppy")
 */

flinstones.push("Dino", "Hoppy");

/* Question 10: Return a new version of this sentence that ends just before the
word house. Don't worry about spaces or punctuation: remove everything starting
from the beginning of house to the end of the sentence.
 */

let advice = "Few things in life are as important as house training your " +
  "pet dinosaur.";
advice.slice(0, advice.indexOf('house'));



