fetch('/todos')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let taskList = document.querySelector('.taskList');
        console.log(taskList)
    })