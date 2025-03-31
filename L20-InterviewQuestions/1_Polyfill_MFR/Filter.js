let arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myFilter = function (cb) {
    /*
    cb = (e, i, a) => {
        if (e % 2 == 0) return false;
        return true;
    }
    */

    let originalArray = this;
    let x = [];
    for (let i = 0; i < originalArray.length; i++) {
        let ans = cb(originalArray[i], i, originalArray);

        if (ans) x.push(originalArray[i]);
    }
    return x;
}

let newArr = arr.myFilter((e, i, a) => {
    console.log(e, i, a)
    if (e % 2 == 0) return true;
    return false;
})

console.log(newArr);
console.log(arr);