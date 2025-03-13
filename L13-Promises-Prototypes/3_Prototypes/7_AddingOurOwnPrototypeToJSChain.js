function Person() {

}

function Student() {

}
// Now they will be considered as constructor functions: Matlab isse hum objects
// banaenge ab
function Teacher() {

}
// Person ke andar meine prototype naam ki key daal di, that can be used
// by an object if we create then using Person as constructor function
Person.prototype = Object.create(Object.prototype);
Student.prototype = Object.create(Person.prototype);
Teacher.prototype = Object.create(Person.prototype);

// Hum agar apne functions ko constructor ki tarah use karna chahte hai
// then we use new keyword
let s = new Student(); // is tarah se hum create karte hai apne objects ko
// This new keyword simply means that we are using Student function as constructor
// function, this means yeh function objects create karega like 
// Number, String, Function, Object, Boolean primitives ki tarah
console.log(s)
console.log(typeof(s)) // object dega output

// s is an object that gets created from Student.prototype
// How was this possible? With new keyword (We will study this new keyword in depth)
// When we will see bindings in upcoming lectures.
console.log(s.__proto__ == Student.prototype)
console.log(s.__proto__.__proto__ == Person.prototype)
console.log(s.__proto__.__proto__.__proto__ == Object.prototype)
console.log(s.__proto__.__proto__.__proto__.__proto__ == null)