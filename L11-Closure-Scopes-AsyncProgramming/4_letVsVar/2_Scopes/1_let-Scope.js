/*
console.log(x);

// This will give reference error
// ReferenceError: Cannot access 'x' before initialization
let x = "I am variable x";

console.log(x);
*/

{
    let message = "Hello World";
    console.log(message);
    message = "Hello I am changed world!";
    console.log(message);
}

{
    let message = "Hello Coding Blocks";
    console.log(message);
}

/*
// We cannot do this incase of let
let message = "Hello World";
let message = "Hello Coding Blocks";
console.log(message);
*/

// Will work with var
var message = "Hello World";
console.log(message);
var message = "Hello Coding Blocks";
console.log(message);