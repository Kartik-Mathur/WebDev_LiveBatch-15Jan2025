var helloWorld;
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