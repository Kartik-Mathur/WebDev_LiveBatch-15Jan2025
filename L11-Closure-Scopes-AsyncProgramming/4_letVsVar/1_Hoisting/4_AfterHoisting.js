// Only the LHS part will get hoisted in case of var creation. Value will be assigned
// When the program will RUN 
var helloWorld;
// The entire function gets hosited..
function sayHello() {
    console.log("Hello");
}
/* ---------------------------------------- */

console.log(helloWorld);

helloWorld = function () {
    console.log("Hello world");
}

console.log(helloWorld);

console.log("Say Hello before function calling", sayHello);
console.log("Say Hello Funcn after function calling", sayHello);