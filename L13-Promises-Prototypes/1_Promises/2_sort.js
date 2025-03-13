let arr = [1, 10, 0, 2, 4, 23];

// Strings sort krega
arr.sort();
console.log(arr);

// Numberical values maani jaengi arrays ki
arr.sort((a, b) => {
    return b - a
})

console.log(arr);