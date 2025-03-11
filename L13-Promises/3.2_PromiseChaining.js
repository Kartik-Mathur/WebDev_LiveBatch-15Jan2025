let p = new Promise((res, rej) => {
    res(); // Promise humesha resolve hoga
})


let p1 = p.then(() => {
    return new Promise((res, rej) => {
        res(2);
    })
})

let p2 = p1.then((data) => {
    console.log("First promise returned", data);
    return new Promise((res, rej) => {
        res(data * 2)
    })
})

p2.then(data => {
    console.log("Second promise returned", data)
})