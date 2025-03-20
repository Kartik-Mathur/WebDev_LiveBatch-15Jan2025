let input = document.querySelector('#input');
let showKeys = document.querySelector('.showKeys');

input.addEventListener('keypress', (event) => {
    // console.log('Key pressed');
    console.log(event.key)
    showKeys.innerText += event.key;
})
