// console.log(arr.__proto__ == Array.prototype)
let arr = [1, 2, 3, 4, 5];
let arr1 = [1, 2, 3, 4, 5];

Array.prototype.mymap = function (cb) {
    /*
    // User ne argument se bheja hai
    cb = (e, i, a) => {
        return e * e;
    }*/
    let originalArray = this; // implicit binding: arr.mymap, inside mymap this would point to arr
    // Because map function returns an array that is completely
    // different than original array
    let newArr = [];
    for (let i = 0; i < originalArray.length; i++) {
        let new_Val = cb(originalArray[i], i, originalArray);
        newArr.push(new_Val);
    }

    return newArr;
}

let newArr = arr.mymap((e, i, a) => {
    console.log(e, i, a);
    return e * e * e;
})


console.log(newArr);
console.log(arr);

let newArr1 = arr1.mymap((e,i,a)=>{
    return Math.sqrt(e);
})

console.log(newArr1);