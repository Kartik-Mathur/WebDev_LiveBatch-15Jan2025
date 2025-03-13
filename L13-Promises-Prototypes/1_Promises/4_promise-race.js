let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Hello")
    }, 2000);
})

let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("World")
    }, 1000);
})

Promise.race([p1, p2]).then((data) => {
    console.log(data);
})