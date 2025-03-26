let input = document.querySelector('input');
let button = document.querySelector('button');
// TASK LIST KO SELECT KARO
let taskList = document.querySelector('ul');

// This will store all the todos of the user...
let todos = [];

let currentId = todos.length + 1;

class Todo {
    static addTask(name) {
        // 1. Create li item
        let li = document.createElement('li');
        // 2. Add inputData to li item
        li.innerText = name;
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
        todos.push({
            task: name,
            id: currentId++
        });

        console.log(todos);


    }

}


button.addEventListener('click', (ev) => {
    let inputData = input.value.trim();

    input.value = "";

    if (inputData) {
        // Now we need to add inputData to our taskList
        // addTaskToTaskList(inputData);
        Todo.addTask(inputData);
    }
})