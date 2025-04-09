let todos = [
    { name: 'Cricket', id: 1, status: false },
    { name: 'Dance', id: 2, status: true },
    { name: 'Sing', id: 3, status: false },
]

let id = 3; // Change the status
todos = todos.map((item) => {
    if (id == item.id) {
        return {
            ...item,
            status: !item.status
        }
    }
    else return item;
})

console.log(todos)