// DON'T TOUCH THE BELOW HELPER FUNCTION
// It's just a nice function so you don't
// have to deal with arrays yet.

// If you call the below function in your
// code, you'll get back the first thing
// the user typed after `node [filename]`.
function getInput() {
  return process.argv[2];
}

module.exports = getInput;


// const getInput = require("./get-input.js");
//
// use console.log to print out a greeting to the user
// step1. Get the user's name
// step2. Save it in a variable
//const str = getInput()
// step3. print out what's in that variable
//console.log("Hi Daisy " + str); 

