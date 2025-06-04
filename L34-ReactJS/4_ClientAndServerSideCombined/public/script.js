const task = document.querySelector('#task');
const description = document.querySelector('#description');
const addtaskButton = document.querySelector('#addtaskButton');
const tasklist = document.querySelector('.tasklist');

function setTask(tasks) {
    tasklist.innerText = '';
    tasks.forEach(t => {
        let li = document.createElement('li');
        let taskDiv = document.createElement('div');
        let taskPara = document.createElement('p');

        taskDiv.innerText = t.name;
        taskPara.innerText = t.description;

        li.appendChild(taskDiv);
        li.appendChild(taskPara);

        tasklist.appendChild(li);
    })
}


addtaskButton.addEventListener('click', (ev) => {
    ev.preventDefault(); // To prevent the HTML to submit form on its own
    let taskValue = task.value;
    let descriptionValue = description.value;
    console.log(taskValue, descriptionValue);
    axios.get('/addtodo', {
        params: {
            task: taskValue,
            description: descriptionValue,
            type: 'csr'
        }
    }).then(({ data }) => {
        setTask(data);
    })

})