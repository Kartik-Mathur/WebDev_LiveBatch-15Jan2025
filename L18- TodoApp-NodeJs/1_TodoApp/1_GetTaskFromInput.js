let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', (ev) => {
    // Aage peeche ke extra space remove krega trim()
    let inputData = input.value.trim();
    
    input.value = "";

    if (inputData) {
        console.log(inputData)
    }
})