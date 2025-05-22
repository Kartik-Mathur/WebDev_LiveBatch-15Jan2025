"use strict";
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Kartik");
function sum(a, b) {
    return a + b;
}
let sum1 = (a, b) => {
    return a + b;
};
let ans = sum(110, 20);
console.log(ans);
ans = sum1(20, 20);
console.log(ans);
