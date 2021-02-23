const getInput = require("./get-input.js");

// 1. Take in our user's age, saving it in a variable
const userAge = getInput();

// check if they want help
if (userAge === '--help') {
    console.log('This returns your mental age.');
    console.log('Please enter your age after "node mental-age.js") and a space');
}
// 2. dividing it by 2 and add 3
const mentalAge = userAge / 2 + 3;
const ageNextYear = userAge + 1;

// 3. print out the user's age in a sentence
// for ex: You are 23 yrs old
console.log("You are" + userAge + "years old");
console.log("Next year you'll be" + ageNextYear + "years old");


// 4. print out user's mental age in a sentence
// for ex: "Your mental age is 12 yrs old."
console.log("Your mental age is" + mentalAge + " years old");
