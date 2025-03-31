function hello(college, year) {
    console.log(this, college, year);
}

let obj = {
    name: 'abc'
}

let obj1 = {
    name: 'def'
}
let f = hello.bind(obj1, "MAIT", 2025);

f();
