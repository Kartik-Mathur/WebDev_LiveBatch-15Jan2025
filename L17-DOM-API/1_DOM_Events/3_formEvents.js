let yahooForm = document.querySelector('#yahooForm');

yahooForm.addEventListener('submit', (ev) => {
    ev.preventDefault(); // Form ko by default submit hone se rokk dega
    console.log("Form submitted");
    console.log(ev.target.children[0].value)
    
    window.location = `https://search.yahoo.com/search?p=${ev.target.children[0].value}`
})