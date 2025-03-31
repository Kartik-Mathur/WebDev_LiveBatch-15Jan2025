function hello(college, year) {
    console.log(this, college, year);
}

let obj = {
    name: 'abc'
}

Function.prototype.mybind = function (myObj, ...args) {
    let fun = this;
    /*
        fun = [Function: hello]
    */
    // console.log(args); ["NSIT"]
    return function (...args1) {
        // console.log(args1); [2025]
        fun.apply(myObj, [...args, ...args1]); // hello function ko call kr diya
        // by setting the `this` inside of `fun` to `hello`
    }
}

let f = hello.mybind(obj, "NSUT", 2025);
f();