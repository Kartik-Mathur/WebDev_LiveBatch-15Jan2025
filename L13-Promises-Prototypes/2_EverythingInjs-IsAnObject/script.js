let obj = {
    a: 1,
    b: "Hello I am b"
}
obj.c = "I am getting added to OBJ"
console.log(obj.b);
console.log(obj);

// Function hai yeh
function fun() {
    console.log("Fun");
}

fun();

console.log(fun.meraObject);// undefined

// Lekin it can still work like an object
fun.meraObject = "I am an object inside function";
console.log(fun.meraObject);
// in JS everything is an Object