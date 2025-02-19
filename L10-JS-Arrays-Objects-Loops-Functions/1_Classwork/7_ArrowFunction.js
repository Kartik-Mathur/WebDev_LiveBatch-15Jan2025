// Arrow and normal functions ka difference 
// baad mei aaega
let a = () => {
    console.log("Hello World");
}

a(); // Call the function a

// Single statement inside arrow function 
// is by default return statement
let sum = (a, b) => a + b;

console.log(sum(10, 20));
console.log(sum(20, 20));

let sub = (a, b) => {
    return a - b
}
console.log(sub(20, 10));