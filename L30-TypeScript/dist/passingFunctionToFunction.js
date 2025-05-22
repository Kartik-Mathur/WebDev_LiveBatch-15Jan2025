"use strict";
function helloWorld() {
    console.log("Hello World");
}
function callMyFun(fn) {
    fn();
}
function callMyFun1(fn) {
    fn(10, 20);
}
function sum(x, y) {
    console.log(x + y);
}
callMyFun(helloWorld);
callMyFun1(sum);
