// Syntactic Sugar
function Person(name, age) {
    // this -> {}
    this.name = name;
    this.age = age;
    // this-> {name, age}
}

Person.prototype.print = function () {
    console.log(this.name, this.age)
}

let p = new Person("Kartik", 25);
// p.print = function () {
//     console.log(this.name, this.age)
// }

console.log(p)
p.print()

let p1 = new Person("Devansh", 18)
p1.print()

/*
function printData() {
    console.log("Name", this.name, "age", this.age)
}

// Can also do this, but again not the best way like class wala p.print()
printData.call(p);
printData.call(p1);
*/