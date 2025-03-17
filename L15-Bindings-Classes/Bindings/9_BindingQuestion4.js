function hello() {
    console.log(this); // it is obj

    let innerFun = () => { // innerfunction bana inside hello, toh yeh apne 
        // parent ke hi context ko use krega
        console.log("Inner fun", this);
        // Arrow functions ke saath kabhi this ko use nhi krte hai hum log
    }

    innerFun();
}

let obj = { a: 1 };
hello.call(obj);