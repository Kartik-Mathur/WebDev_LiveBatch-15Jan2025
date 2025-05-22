"use strict";
function generateUser(name, age) {
    return {
        name,
        age,
        address: "Delhi",
    };
}
let user1 = generateUser("Aman", 24);
console.log(user1);
