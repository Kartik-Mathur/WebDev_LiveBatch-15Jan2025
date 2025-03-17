let obj = {
    a: 1,
    b: 'hello',
    print: function () {
        console.log(this); // this is actually 'Execution content' ka reference
        this.c = 'new c added inside print';
    }
}

// Implicit binding: obj.print() toh print ke andar this will point to obj
// Implicit this will on itself point to obj, humne nhi bataya khud figure kia JS ne
obj.print();
console.log(obj);