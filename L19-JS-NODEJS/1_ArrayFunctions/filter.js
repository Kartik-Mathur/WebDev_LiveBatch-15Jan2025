let arr = [11, 12, 13, 14, 15];

// filter se original size change ho sakta hai
let newArr = arr.filter((data, index, a) => {
    if (data % 2 == 0) return false;

    return true;
})

console.log(newArr)