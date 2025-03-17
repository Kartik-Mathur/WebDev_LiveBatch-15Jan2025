function Person(name, age) {
    // this-> {} // empty object as context
    this.name = name;
    this.age = age;
    // this-> {name: name, age: age}
    // constructor ki tarah use krna hai toh we never return anything from
    // constructor
}

let p = new Person("Kartik", 25); // We are using the Person function as
// constructor function
console.log(p)