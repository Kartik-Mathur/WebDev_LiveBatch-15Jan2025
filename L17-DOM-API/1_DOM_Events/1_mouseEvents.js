let h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', () => {
    console.log("Mouse entered");
})

h1.addEventListener('mouseleave', () => {
    console.log("Mouse left");
})

h1.addEventListener('mousedown', () => {
    console.log("Mouse is pressed");
})

h1.addEventListener('mouseup', () => {
    console.log("Mouse is pressed and released");
})
