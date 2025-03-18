// let h = document.getElementById('heading');// Single element
// console.log(h);
let movies = document.getElementsByClassName('movie'); // Collection
console.log(movies)

let h = document.querySelector('#heading'); // Single Element
console.log(h)

// Upr se jo bhi pehla element movie class ke saath milega usse select kr lega
h = document.querySelector('.movie'); // Single Element
console.log(h)

h = document.querySelectorAll('.movie'); // All Elements on page with class movie
console.log(h)