function createCounter() {
    let cnt = 0;

    return function () {
        cnt++;
        return cnt;
    }
}

let counter1 = createCounter(); /* 
Closure: {cnt: 0}
function () {
    cnt++;
    return cnt;
}
*/

let counter2 = createCounter();/* 
Closure: {cnt: 0}
function () {
    cnt++;
    return cnt;
}
*/

console.log(counter1());// 1
console.log(counter1());// 2
console.log(counter1());// 3
console.log(counter1());// 4

console.log(counter2()); // 1
console.log(counter2());// 2
console.log(counter2());// 3
console.log(counter2());// 4