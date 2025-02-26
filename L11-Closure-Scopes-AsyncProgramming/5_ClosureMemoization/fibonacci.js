function fibonacci(n) {
    if (n == 0) return n;
    if (n == 1 || n == 2) return 1;

    let a = 0, b = 1, c = 1;

    for (let i = 0; i < n - 2; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    return c;
}


function memoize(fn) {
    let cache = {};

    return function (n) {
        if (cache[n]) {
            return cache[n];
        }
        let ans = fn(n);
        return cache[n] = ans;
    }
}

let fibo = memoize(fibonacci);

console.log(fibo(5));
console.log(fibo(5));
