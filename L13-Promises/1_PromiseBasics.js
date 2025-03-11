function fullFillHandler() {
    console.log("Promise Poora ho gaya");
}

function rejectHandler() {
    console.log("Promise Toot gaya");
}

let p = new Promise((res, rej) => {
    let kyaPromisePooraHua = false;
    console.log("Resolve ya reject call ho raha hai")

    if (kyaPromisePooraHua) res();
    else rej();
})
// Now lets map res-> fullFillHandler and rej-> rejectHandler
/* 
    Way-1: p.then(pooreHoneParJoFunctionChlega, tootneParJoFuncChalega)
    // or
    Way-2: p
            .then(pooreHoneParJoFunctionChlega)
            .catch(tootneParJoFuncChalega)
*/
console.log(".then and .catch define ho rahe hai");
p
    .then(fullFillHandler)
    .catch(rejectHandler)