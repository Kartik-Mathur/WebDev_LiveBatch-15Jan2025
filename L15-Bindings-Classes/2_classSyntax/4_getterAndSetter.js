class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(this.name, this.age)
    }

    // getter and setter acts like property not a function
    get getName() {
        return this.name
    }
    set setName(newName) {
        this.name = newName
    }
}

let p = new Person("Kartik", 25);
console.log(p)

p.setName = "Kartik Mathur"
console.log(p.getName);
