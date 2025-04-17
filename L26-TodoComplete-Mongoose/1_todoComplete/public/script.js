let taskForm = document.querySelector('#task-form');
let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('#task-list');
let clearCompleted = document.querySelector('#clear-completed');
let filterButtons = document.querySelector('.filter-buttons');

let currentTodos = [];

filterButtons.addEventListener('click', (ev) => {
    let id = ev.target.getAttribute('id');
    if (id != null) {
        let show_tasks = id.split('-').pop();

        // Jo bhi id hai us button par active class lagado, baakiyo se
        // hatado
        console.log(ev.target)
        let allButtons = ev.target.parentElement.children;
        // console.log(allButtons)

        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove('active');
        }

        if (show_tasks === 'all') {
            document.querySelector('#filter-all').classList.add('active');
            addToTaskList(currentTodos);
        }
        else if (show_tasks === 'completed') {
            document.querySelector('#filter-completed').classList.add('active');
            let completedTasks = currentTodos.filter(t => t.status == true);
            addToTaskList(completedTasks);
        }
        else if (show_tasks === 'active') {
            document.querySelector('#filter-active').classList.add('active');
            let activeTasks = currentTodos.filter(t => t.status == false);
            addToTaskList(activeTasks);
        }
    }
})

taskList.addEventListener('click', (ev) => {
    // Task list ke andar sabhi par yeh event listener kaam karega
    // Let's detect the complete button first
    let element = ev.target;
    if (element.classList.contains('complete-btn')) {
        let id = element.children[0].innerText;
        console.log(id)
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
            data: { id }
        }).then(({ data }) => {
            console.log(data)
            refreshTodos();
        }).catch(err => {
            alert(err.message);
        })
    }
})

function addToTaskList(data) {
    // Empty the existing tasklist
    taskList.innerText = '';

    data.forEach(d => {
        let li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = `
            <span class="task-text">${d.task}</span>
            <div class="task-actions">
                <button class="complete-btn">
                ${d.status ? 'Undo' : 'Complete'}
                    <span style='display:none'>${d._id}</span>
                </button>
                <!-- <button class="edit-btn">Edit</button> --->
                <button class="delete-btn">Delete
                    <span style='display:none'>${d._id}</span>
                </button>
            </div>`;

        taskList.appendChild(li);
    })
}

function refreshTodos() {
    // Fetch all the tasks and then load it on to the tasklist again
    axios.get('/todos')
        .then(({ data }) => {
            console.log(data);
            currentTodos = data.tasks;
            addToTaskList(data.tasks);
        })
}

clearCompleted.addEventListener('click', (ev) => {
    console.log("Clicked")
    axios.put('/clear-completed')
        .then(({ data }) => {
            console.log(data);
            refreshTodos();
        }).catch(err => {
            alert(err.message);
        })
})


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

//  To load the initial todos 
refreshTodos();