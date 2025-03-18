let movieList = document.querySelector('.movieList');
console.log(movieList)

let arr = ['Avatar', 'Mr Bean-1', 'GAME', 'RUN', 'Harry Potter', 'Talash']

for (let e of arr) {
    movieList.innerHTML += `<li class="movie">${e}</li>`
}

console.log(movieList.inner)
setTimeout(() => {
    // Way - 1: O(N)
    // movieList.innerHTML += `<li class="movie">Coding</li>`

    // Way - 2: O(1)
    let li = document.createElement('li');
    li.innerText = 'Coding Bilaaks';
    li.classList.add('movie');

    movieList.appendChild(li);
}, 3000);