let a = 10; // Number is a datatype we can store it inside a variable

console.log(a);

a = function helloWorld() { // Function is also a datatype, we can store it inside a variable
    console.log("Hello World");
}

a();
// helloWorld(); // This this cannot be done, because yeh ab a mei stored h

a = function () {
    console.log("Hello World!!!!!");
}

a(); // To we can ignore helloWorld name in general
console.log(a); // [Function: a]
console.log(a.toString()); // Will print the entire function as string