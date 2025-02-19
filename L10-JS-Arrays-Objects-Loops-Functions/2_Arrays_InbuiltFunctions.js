let a = [1, 2, 3, 4];

// Array is like doubly linked list
// push, pop for operations at the end
a.push(5);
console.log(a);
let f = a.pop();
console.log("f", f);
console.log(a);


// unshift, shift for operations at the front
a.unshift(10);
console.log(a);
let x = a.shift(); // shift will return the value that is being removed
console.log("x", x);
console.log(a);