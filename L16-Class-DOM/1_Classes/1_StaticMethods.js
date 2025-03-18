// static members they belong to classes(addArray)
// non static belongs to object (name, age)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static addArray() {
        let arr = [1, 2, 3, 4, 5];
        let sum = 0;
        for (let i = 0; i < arr.length; i++) sum += arr[i];

        return sum;
    }
}

let p = new Person('kartik', 123);
// console.log(p.addArray()); // Error dega kyunki Object ke pass yeh nhi hota
console.log(Person.addArray())