let h1 = document.querySelector('h1');

h1.onclick = () => {
    alert('Merko kyu dabaya');
}

h1.onclick = () => {
    alert('Another function on h1 click');
}

console.log(h1)

// h1.addEventListener('click', () => {
//     alert("Why pressing me?");
// })

let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     // document.querySelector('body').classList.toggle('theme');
//     console.log("I am first handler");
// })

// btn.addEventListener('click', () => {
//     console.log("I am second handler");
// })

btn.addEventListener('dblclick', () => {
    console.log("Hey! I am clicked twice");
})
