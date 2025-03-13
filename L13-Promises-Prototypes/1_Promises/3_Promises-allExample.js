let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Hello")
    }, 1000);
})

let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("World")
    }, 1000);
})

let p3 = new Promise((res, rej) => {
    let resolveKarein = false;
    if(!resolveKarein) return rej("Nahi ho paaya kaam");
    res("How are you?")
})


Promise.all([p1, p2, p3]).then((d) => {
    console.log(d);
}).catch(msg=>{
    console.log(msg)
})