// 1. Print "Hello"
// 2. Wait for 5 seconds
// 3. Print "World"
function waitASec() {
    let t1 = new Date().getTime(); // initialTime
    while (new Date().getTime() < t1 + 1000) { }
}

function waitNSec(n) {
    for (let i = 0; i < n; i++) {
        waitASec();
    }

    console.log(n+" seconds completed");
}

console.log("Hello");
waitNSec(5);
console.log("World");