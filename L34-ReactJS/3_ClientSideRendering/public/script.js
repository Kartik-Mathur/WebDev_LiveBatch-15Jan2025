const task = document.querySelector('#task');
const description = document.querySelector('#description');
const addtaskButton = document.querySelector('#addtaskButton');
const tasklist = document.querySelector('.tasklist');

function setTask(tasks) {
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
    let taskValue = task.value;
    let descriptionValue = description.value;
    console.log(taskValue, descriptionValue);
    axios.get('/addtodo', {
        params: {
            task: taskValue,
            description: descriptionValue
        }
    }).then(({ data }) => {
        setTask(data);
    })

})