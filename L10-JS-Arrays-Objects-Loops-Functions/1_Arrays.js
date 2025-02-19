var a = [1, 2, 3, 4];

console.log(a);

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// Arrays are heterogenous in js
var b = [1, 2, 3, true, 'Hello World']

console.log(b); // This is to print

b[10] = 10;
console.log(b);

// To print array we have a special loop called
// for-of loop

// e ke andar ek ek karke b ki values aaengi
for (var e of b) {
    console.log(e);
}