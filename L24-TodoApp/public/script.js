let taskForm = document.querySelector('#task-form');
let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('#task-list');

taskList.addEventListener('click', (ev) => {
    // Task list ke andar sabhi par yeh event listener kaam karega
    // Let's detect the complete button first
    let element = ev.target;
    if (element.classList.contains('complete-btn')) {
        let id = element.children[0].innerText;

        axios.put('/todos', {
            id
        }).then(({ data }) => {
            refreshTodos();
        }).catch(err => {
            alert(err.message);
        })
    }
    else if (element.classList.contains('delete-btn')) {
        let id = element.children[0].innerText;

        axios.delete('/todos', {
            id
        }).then(({ data }) => {
            console.log(data)
            refreshTodos();
        }).catch(err => {
            alert(err.message);
        })
    }
})

function refreshTodos() {
    // Empty the existing tasklist
    taskList.innerText = '';
    // Fetch all the tasks and then load it on to the tasklist again
    axios.get('/todos')
        .then(({ data }) => {
            data.forEach(d => {
                let li = document.createElement('li');
                li.classList.add('task-item');

                li.innerHTML = `
                    <span class="task-text">${d.task}</span>
                    <div class="task-actions">
                        <button class="complete-btn">
                        ${d.status ? 'Undo' : 'Complete'}
                            <span style='display:none'>${d.id}</span>
                        </button>
                        <!-- <button class="edit-btn">Edit</button> --->
                        <button class="delete-btn">Delete
                            <span style='display:none'>${d.id}</span>
                        </button>
                    </div>`;

                taskList.appendChild(li);
            })
        })
}

taskForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let taskName = taskInput.value;

    axios.post('/todos', {
        "task": taskName
    })
        .then(({ data }) => {
            refreshTodos();
        })
        .catch(err => {
            alert(err.message);
        })
})

