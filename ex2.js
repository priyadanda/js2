// The following code takes a given name, runs a function to create a string and logs the name.
// The output should be "My name is Zara Williams !" when run.
// The code has 7 errors, find them and fix them and use node to check it is working.
// Hint: check particularly for incorrect marks/syntax, mispelled functions, and that information is returned from a function if needed.

function concatenate(first, last) {
    var full;
    full = `My name is ${first} ${last} !`;// ` required
   return full;
  }


  function getName(firstName, lastName) { //first changed to firstName n function keyword missing
    var result;
    result = concatenate(firstName, lastName);
    console.log(result );
 }
   getName("Zara", "Williams"); //missing " 
  