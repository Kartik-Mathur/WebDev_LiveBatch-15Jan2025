// Syntactic Sugar
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(this.name, this.age)
    }
}

let p = new Person("Kartik", 25);
console.log(p)

console.log(typeof Person); // function
console.log(p.__proto__ == Person.prototype); // true

p.print();