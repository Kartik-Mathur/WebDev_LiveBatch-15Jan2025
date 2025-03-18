// Accessing the inner content
// 1. innerText
// 2. innerHTML

h = document.querySelector('.movieList');
console.log(h.innerText)
console.log(h.innerHTML)

h.innerHTML += `<li>Meri movie</li>`
// h.innerText += `<li>Meri nai movie</li>`

let movie = document.querySelector('.movie');
console.log(movie.innerText)

// Yeh nhi chlega 
// let movies = document.querySelectorAll('.movie');
// console.log(movies)
// movies.push('<li>Meri nai movie</li>') // Allowed nhi hai
// console.log(movies)