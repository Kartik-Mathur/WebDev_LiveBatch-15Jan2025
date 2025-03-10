function task1(cb) { // cb of task1 is task2
    console.log("Task1 starts");
    setTimeout(() => {
        console.log("Task1 completed")
        cb(function task3(cb) {
            console.log("Task3 starts")
            setTimeout(() => {
                console.log("Task3 completed")
                cb();
            }, 1000);
        }); // task1 complete hone par uska callback chala do
    }, 1000);
}

task1(function task2(cb) {
    console.log("Task2 starts")
    setTimeout(() => {
        console.log("Task2 completed")
        cb(function task4() {
            console.log("Task4 starts")
            setTimeout(() => {
                console.log("Task4 completed")
            }, 1000);
        });// Calling task3 which is callback of task2
    }, 1000);
});