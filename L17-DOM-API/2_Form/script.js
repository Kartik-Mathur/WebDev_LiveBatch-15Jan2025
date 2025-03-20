let form = document.querySelector('#form');
let platform = document.querySelector('#platform');
let inp = document.querySelector('input');

form.addEventListener('submit', (ev) => {
    ev.preventDefault(); // Form ko by default submit hone se rokk dega
    // console.log("Form submitted");
    // console.log(inp.value)
    // console.log(platform.value)

    if (platform.value == 'Google') {
        window.location = `https://www.google.com/search?q=${inp.value}`
    }
    else {
        window.location = `https://search.yahoo.com/search?p=${inp.value}`
    }
})

