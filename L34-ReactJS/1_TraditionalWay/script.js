let tasklist = document.querySelector('.tasklist');

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


setTask([
    { name: 'Running', description: 'I am running fast' },
    { name: 'Coding', description: 'I am coding fast' },
    { name: 'Swim', description: 'I am swimming fast' },
])