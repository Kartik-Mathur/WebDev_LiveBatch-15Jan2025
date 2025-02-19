function callFun(fun) { // fun: [Function: helloWorld]
    fun(); // Calling the function fun that user has passed into argument.
}


function helloWorld() {
    console.log("hello world");
}


callFun(helloWorld); // helloWorld ko pass kia hai, call nhi kia helloWorld ko