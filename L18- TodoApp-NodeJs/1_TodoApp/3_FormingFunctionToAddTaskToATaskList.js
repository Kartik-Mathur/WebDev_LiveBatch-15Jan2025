let input = document.querySelector('input');
let button = document.querySelector('button');
// TASK LIST KO SELECT KARO
let taskList = document.querySelector('ul');

function addTaskToTaskList(name) {
    // <li>
    //     Cricket
    //     <button class="decrease-priority">↓</button>
    //     <button class="increase-priority">↑</button>
    //     <button class="delete-task">❌</button>
    //     <button class="update-task">📝</button>
    // </li>

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
}


button.addEventListener('click', (ev) => {
    let inputData = input.value.trim();

    input.value = "";

    if (inputData) {
        // Now we need to add inputData to our taskList
        addTaskToTaskList(inputData);
    }
})