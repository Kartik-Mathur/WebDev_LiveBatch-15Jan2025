let movieList = document.querySelector('.movieList');
console.log(movieList)

let arr = ['Avatar', 'Mr Bean', 'GAME', 'RUN', 'Harry Potter', 'Talash']

for (let e of arr) {
    let li = document.createElement('li');
    li.innerText = e;
    li.classList.add('movie');

    movieList.appendChild(li);
}