// Yeh way hai to create HTML element using JS
let li = document.createElement('li');

li.innerText = 'Avatar';
li.classList.add('movie');
console.log(li); 

let movieList = document.querySelector('.movieList');
console.log(movieList)

// To add an item on HTML page's element
movieList.appendChild(li);