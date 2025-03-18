// let movies = document.querySelectorAll('.movie');

// for (let i = 0; i < movies.length; i++) {
//     let movie = movies[i];

//     movie.style.color = 'orange';
//     movie.style.backgroundColor = 'black';
// }

// document.querySelector('body').style.backgroundColor = 'black'
// document.querySelector('body').style.color = 'white'

let movie = document.querySelector('.movie')
// movie.classList.add('myMovie')

// setTimeout(()=>{
//     movie.classList.remove('myMovie')
// },3000);

setInterval(() => {
    document.querySelector('body').classList.toggle('myMovie');
}, 2000);