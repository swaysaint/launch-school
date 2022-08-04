/* Question 6:
What do you think the following code will output?
 */

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// False. Use Number.isNaN() to check if something is NaN.