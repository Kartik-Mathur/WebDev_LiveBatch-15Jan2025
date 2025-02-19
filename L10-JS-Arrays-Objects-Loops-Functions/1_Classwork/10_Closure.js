function genFun() {
    let a = 10, b = 20;
    
    function add() {
        return a + b;
    }

    return add;
}

let fun = genFun();
fun();

