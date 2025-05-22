"use strict";
;
function createUser(name, age) {
    return {
        name,
        age,
        address: "Delhi",
    };
}
let user = createUser("Aman", 24);
console.log(user);
