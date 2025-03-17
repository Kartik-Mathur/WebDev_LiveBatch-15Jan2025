class Person {
    organisation = "Coding Blocks" // yeh sabke pass aa jaega by default
    // Private fields starts with #, yeh kisi object ke pass nhi jaenge
    #secret = "Mera secret"
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.#anotherSecret = 'My new Secret'; // Will give an error
    }

    print() {
        console.log(this.name, this.age)
    }

    getSecret() {
        return this.#secret; // Private fields can be accessed inside functions
    }
}

let p = new Person("Kartik", 25);
let p1 = new Person("Shivesh", 25);
console.log(p) // Will not have secret key print here
console.log(p1) // Will not have secret key print here
// console.log(p1.#secret) // Error dega
console.log(p.getSecret())
