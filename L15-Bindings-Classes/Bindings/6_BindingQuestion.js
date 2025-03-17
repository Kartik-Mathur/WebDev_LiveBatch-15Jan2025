function hello() {
    console.log(this);

    function innerFun() {
        console.log("Inner fun", this);
    }

    innerFun();
}

let obj = { a: 1 };
hello.call(obj);

// {a: 1}
// Inner fun global