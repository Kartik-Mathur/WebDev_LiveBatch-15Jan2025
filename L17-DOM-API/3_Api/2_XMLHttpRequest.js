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

let xhr = new XMLHttpRequest();

// Request kaha karni h
xhr.open("GET", url);

// Request send krni hai jab button dab jaaye
button.onclick = () => {
    xhr.send();
}

xhr.onload = (data) => {
    // JSON: Javascript Object Notation
    // JSON data recieve hua
    data = data.currentTarget.response;

    // data is string by default, to convert it to JS object we use
    // JSON.parse()
    data = JSON.parse(data);
    addToTaskList(data);
}
// Error aane par yeh hoga!
xhr.onerror = (errorMsg) => {
    console.log(errorMsg);
}



