let url = 'https://jsonplaceholder.typicode.com/todos';
let tasklist = document.querySelector('#tasklist');

function addToTaskList(data) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        // console.log(element.title)
        let li = document.createElement('li');
        li.innerText = element.title;
        tasklist.appendChild(li);
    }
}

// Fetch ek promise hai
fetch(url)
    .then(data => {
        return data.json();
    }).then(data => {
        addToTaskList(data);
    }).catch(err => {
        console.log(err)
    })