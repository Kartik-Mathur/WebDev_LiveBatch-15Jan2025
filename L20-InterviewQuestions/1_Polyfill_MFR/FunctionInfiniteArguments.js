function sum(...args) {
    return args.reduce((acc, v) => acc + v);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


let arr = [1,2];
let arr1= [3,4];

let newArr = [...arr, ...arr1];
console.log(newArr);