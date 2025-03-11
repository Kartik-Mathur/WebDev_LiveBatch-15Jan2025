let p = new Promise((res, rej) => {
    let kyaPromisePooraHua = true;

    setTimeout(() => {
        console.log("Resolve ya reject call ho raha hai")
        if (kyaPromisePooraHua) res();
        else rej();
    }, 5000);
})

console.log(".then and .catch define ho rahe hai");

p
    .then(function () {
        console.log("Promise Poora ho gaya");
    })
    .catch(function () {
        console.log("Promise Toot gaya");
    })

console.log("p.then and p.catch ke baad ki line");