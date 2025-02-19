function genFun(){

    function helloWorld(){
        console.log("Hello world!!");
    }

     // helloWorld ko return kia hai, call nhi kia helloWorld ko
    return helloWorld;
}

let fun = genFun(); // genFun ek function return kar raha hai

fun(); // genFun ne jo function return kia usse hum call kar skte h

