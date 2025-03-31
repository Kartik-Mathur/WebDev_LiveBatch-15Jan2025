// let cb = (i)=>{
//     return i*i;
// }

// console.log(cb(3));

let cb = (a, b) => {
    return a + b;
}

let arr = [10, 20, 30, 40, 50];
let ans = 0;
for (let i = 0; i < arr.length; i++) {
    ans = cb(ans, arr[i]);
}
console.log(ans);

/*
let ans = cb(10, 20);
ans = cb(ans, 30);
ans = cb(ans, 40);

console.log(cb(ans, 50));
*/