function hello(name, age) {
    console.log(this, `Name: ${name} and age: ${age}`);
}

let obj1 = { a: 1 }
let obj2 = { b: 2 }

// 1. apply
// function_name.apply(context, [argument1, arg2, arg3]);
hello.apply(obj1, ["Kartik", 20]);
hello.apply(obj2, ["Yash", 12]);

hello("andas", 99999); // default binding