// setInterval provides an id that we can use to stop this
let id = setInterval(function () {
    console.log("Hi")
}, 1000); // After every 1000 milliseconds yeh function dobara run krega

let id1 = setInterval(function () {
    console.log("Hello")
}, 1000); // After every 1000 milliseconds yeh function dobara run krega

console.log("id:", id, "id1:", id1);

setTimeout(() => {
    clearInterval(id);
}, 5000);