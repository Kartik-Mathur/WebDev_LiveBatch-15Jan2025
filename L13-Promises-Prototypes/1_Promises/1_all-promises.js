function sortArray1(a) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            a.sort((a, b) => a - b);
            res(a);
        }, 3000)
    })
}

function sortArray2(a) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            a.sort((a, b) => a - b);
            res(a);
        }, 1000)
    })
}

// Get both sorted arrays and then provide the combined result of both
let arr1 = [4, 3, 5, 8, 7];
let arr2 = [1, 2, 6, 9, 10];

Promise.all([sortArray1(arr1), sortArray2(arr2)]).then(data => {
    // console.log(data)
    let newArr = [...data[0],...data[1]]
    /*
    let newArr = [];
    for(let e of data[0]) newArr.push(e);
    for(let e of data[1]) newArr.push(e);
    */
    console.log(newArr)
})