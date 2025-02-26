function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    }
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

let counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());