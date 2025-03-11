let p = new Promise((res, rej) => {
    res();
})

/*
let p1 = p.then(() => {
    console.log("Promise poora hua")

    return new Promise((res, rej) => {
        res(2)
    })
})
*/

/*
let p1 = new Promise((res, rej) => {
        res(2)
    })

p1.then((data)=>{
      console.log("First promise returned",data);  
    })
    .catch()

*/