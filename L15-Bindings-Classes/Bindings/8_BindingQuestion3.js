/*
function hello() {
    console.log(this.a);
}

let obj1 = { a: 1 }
let obj2 = { a: 11 }

hello.call(obj1); // 1
hello.call(obj2); // 11
*/

this.a = 'Mei hoon global ka a';

let myHello = () => {
    console.log(this.a); // Here this will point to global, irrespective of 
    // how we call it in the current example.
}

let obj1 = { a: 1 }
let obj2 = { a: 11 }

myHello.call(obj1);
myHello.call(obj2);