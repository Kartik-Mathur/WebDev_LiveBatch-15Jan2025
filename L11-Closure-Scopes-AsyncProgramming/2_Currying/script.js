/*function add(num) {
    if (!num) return 0;

    return function helper(v) {
        if (!v) return num;

        num += v;
        return helper;
    }
}*/
let add = function (num) {
    if (!num) return 0;

    return function helper(v) {
        if (!v) return num;

        num += v;
        return helper;
    }
}

console.log(add())
console.log(add(1)())
console.log(add(1)(2)())
console.log(add(1)(2)(3)())
console.log(add(1)(2)(3)(4)())