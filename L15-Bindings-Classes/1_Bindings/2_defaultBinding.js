// console.log(this); // global(nodejs) == window(Browser)
// console.log(global); // by default this is global
function hello() {
    console.log("Inside function", this);
}

hello();
