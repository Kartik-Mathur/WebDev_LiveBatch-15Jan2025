let Obj = {
    a: 1,
    description: "I am parent Object"
}

let newObj = Object.create(Obj); // newObj ka parent will be Obj
console.log(newObj.__proto__ == Obj);