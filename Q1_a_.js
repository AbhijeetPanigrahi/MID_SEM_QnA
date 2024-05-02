/*
Q-- State the difference between local Variables and Global Variables.
    Explain the differences using the program.

Local Variables: Declared inside a function or block, accessible only within that function or block.
Global Variables: Declared outside any function or block, accessible throughout the entire program.
*/

let globalVar = "I am global";

function exampleFunction() {
  let localVar = "I am local";
  console.log(localVar); // Accessible inside the function
  console.log(globalVar); // Accessible inside and outside the function
}

console.log(globalVar); // Accessible outside the function
// console.log(localVar); // Error: localVar is not defined outside the function
