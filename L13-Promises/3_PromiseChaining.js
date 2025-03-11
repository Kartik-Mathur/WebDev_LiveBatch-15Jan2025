let p = new Promise((res, rej) => {
    rej(); // Promise humesha resolve hoga
})

p
    .then(() => {
        console.log("Promise poora hua")
        return 2; // Promise always returns a promise
    })
    .then((data) => {
        console.log("First promise returned", data);
        return data * 2;
    })
    .then((data) => {
        console.log("Second promise returned", data);
        return data * 2;
    })
    .then((data) => {
        console.log(data)
    })
    .catch(() => {
        console.log("Promise fail ho gaya");
    })