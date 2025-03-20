let url = 'https://jsonplaceholder.typicode.com/todos';
let tasklist = document.querySelector('#tasklist');
let button = document.querySelector('button');

function addToTaskList(data) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        // console.log(element.title)
        let li = document.createElement('li');
        li.innerText = element.title;
        tasklist.appendChild(li);
    }
}

button.onclick = () => {
    axios.get(url)
        .then(res => {
            console.log(res);
            data = res.data;

            addToTaskList(data);
        })
        .catch(err => {
            console.log(err);
        })
}