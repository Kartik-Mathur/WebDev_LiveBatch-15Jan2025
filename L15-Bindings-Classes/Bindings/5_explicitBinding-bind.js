function hello(name, age) {
    console.log(this, `Name: ${name} and age: ${age}`);
}

let obj1 = { a: 1 }
let obj2 = { b: 2 }

// 1. bind
// function_name.bind(context, argument1, arg2, arg3);
let fun = hello.bind(obj1, "Kartik", 20);
let fun1 = hello.bind(obj2, "Yash", 12);

// bind ekdum call nhi krega, instead ek function return kr dega that can be called
// later on with this pointing to the context that user provided 
fun();
fun();
fun1();

let fun2 = hello.bind(obj1, "Devansh");
fun2(20);

let fun3 = hello.bind(obj1);
fun3("Vaibhav", 2222222);