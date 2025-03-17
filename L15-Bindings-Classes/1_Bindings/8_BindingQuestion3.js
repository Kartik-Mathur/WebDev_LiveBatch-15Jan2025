/*
function hello() {
    console.log(this.a); 
}

let obj1 = { a: 1 }
let obj2 = { a: 11 }

hello.call(obj1); // 1
hello.call(obj2); // 11
*/

this.a = 'Mei hoon a of this';

let myHello = () => {
    console.log(this.a); // Here this will point to global/window, irrespective of 
    // how we call it in the current example.
}

let obj1 = { a: 1 }
let obj2 = { a: 11 }

myHello.call(obj1);
myHello.call(obj2);


// console.log(this); yaha this point krega to "module.exports"(JUST REMEMBER IT, DON'T THINK ABOUT IT FOR NOW)