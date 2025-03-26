// GOAL: Initially agar todos ke array mei kuch ho toh usse add karna padega page
// par, we are adding a static function inside Todo class

let input = document.querySelector('input');
let button = document.querySelector('button');
// TASK LIST KO SELECT KARO
let taskList = document.querySelector('ul');

// This will store all the todos of the user...
let todos = [
    { task: 'Cricket', id: 1 },
    { task: 'Hockey', id: 2 },
    { task: 'Sing', id: 3 },
    { task: 'Coding', id: 4 },
]; // Isko load krne ke liye initially we have created function refreshTodos

let currentId = todos.length + 1;

class Todo {
    static addTask(name, initialLoading = false) {
        // 1. Create li item
        let li = document.createElement('li');
        // 2. Add inputData to li item
        li.innerText = name;
        li.setAttribute('id', name);
        // 3. Create ↓, ↑, ❌, 📝 : Total 4 buttons
        let btn1 = document.createElement('button');
        btn1.innerText = '↓';
        btn1.classList.add('decrease-priority')
        let btn2 = document.createElement('button');
        btn2.innerText = '↑';
        btn2.classList.add('increase-priority')
        let btn3 = document.createElement('button');
        btn3.innerText = '❌';
        btn3.classList.add('delete-task')
        let btn4 = document.createElement('button');
        btn4.innerText = '📝';
        btn4.classList.add('update-task')
        // 4. Append all buttons as children of li
        li.appendChild(btn1);
        li.appendChild(btn2);
        li.appendChild(btn3);
        li.appendChild(btn4);
        // console.log(li)

        // 5. Append this li to taskList
        taskList.appendChild(li);



        // ---------------- ADDING TASK TO TODOS --------------
        if (initialLoading == false) {
            // Iska matlab we are adding the text inside todos array if it is
            // not already present inside the todos array.
            todos.push({
                task: name,
                id: currentId++
            });
            console.log(todos);
        }
    }


    static refreshTodos() {
        taskList.innerText = "";
        for (let i = 0; i < todos.length; i++) {
            this.addTask(todos[i].task, true);
        }
    }

    static deleteTask(name) {
        let indx;
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].task == name) {
                indx = i;
                break;
            }
        }

        let partA = todos.slice(0, indx);
        let partB = todos.slice(indx + 1);
        todos = [...partA, ...partB];
        console.log(todos);
        this.refreshTodos();
    }
}

Todo.refreshTodos();

button.addEventListener('click', (ev) => {
    let inputData = input.value.trim();

    input.value = "";

    if (inputData) {
        // Now we need to add inputData to our taskList
        // addTaskToTaskList(inputData);
        Todo.addTask(inputData);
    }
})



// ---------------------------- DELETE TASK FROM DOM ---------------------------- 
// 1. Detect which cross button has been clicked.
taskList.addEventListener('click', (ev) => {
    let target = ev.target;

    if (target.classList.contains('delete-task')) {
        // console.log(target.parentElement);
        let taskName = target.parentElement.innerText;
        taskName = taskName.slice(0, taskName.length - 5);
        // Pick the taskName and updateTodos
        Todo.deleteTask(taskName);
    }
})
