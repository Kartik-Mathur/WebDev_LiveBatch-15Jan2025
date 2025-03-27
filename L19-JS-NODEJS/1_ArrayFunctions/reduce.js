let arr = [1, 2, 3, 4, 5];

// acc: 1, val: 2
// acc: 3, val: 3
// acc: 6, val: 4
// acc: 10, val: 5
let ans = arr.reduce((acc, val, indx, a) => {
    return acc + val;
})

console.log(ans);

// acc: 1, val: 1
// acc: 1, val: 2
// acc: 2, val: 3
// acc: 6, val: 4
// acc: 24, val: 5
let fact_ans = arr.reduce((acc, val, indx, a) => {
    return acc * val;
}, 1)

console.log(fact_ans)