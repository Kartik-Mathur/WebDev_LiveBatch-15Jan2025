var x = -10;

function hello() {
    var x;
    
    console.log(x); // undefined

    x = "Hello World";

    console.log(x); // Hello World
}

hello();

console.log(x); // -10