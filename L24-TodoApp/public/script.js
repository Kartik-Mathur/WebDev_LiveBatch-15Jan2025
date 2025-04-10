let taskForm = document.querySelector('#task-form');
let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('#task-list');

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
                        <button class="complete-btn">${d.status ? 'Undo' : 'Complete'}</button>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
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

