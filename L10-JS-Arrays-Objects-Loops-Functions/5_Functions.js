function helloWorld() {
    console.log("hello world");
}

helloWorld();

function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));
let x = sum(10.1, 20.1);
console.log(x.toFixed(2));
console.log(x.toPrecision(4));