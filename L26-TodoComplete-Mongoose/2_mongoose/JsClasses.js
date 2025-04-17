class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print(){
        console.log(this.name)
    }

    save(){
        return new Promise((res,rej)=>{
            // Store in db and call res()
        })
    }
}

let A = new Car("BMW", 1000000);
console.log(A);

A.print();



let person = {
    name: 'Vaibhav',
    isAdult: true
}

person.isAdult = !person.isAdult;

console.log(person);