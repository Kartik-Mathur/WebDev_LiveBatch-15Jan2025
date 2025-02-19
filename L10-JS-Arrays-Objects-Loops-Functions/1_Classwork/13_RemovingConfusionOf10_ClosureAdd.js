function genFun() {
    let a = 10, b = 20;
    
    function randomFun() {
        return a + b;
    }

    return randomFun;
}

let fun = genFun();
fun();

