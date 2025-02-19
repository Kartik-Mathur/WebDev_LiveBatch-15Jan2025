// Objects store key and value pair 
let person = {
    //  key : value,
    name: 'Ashish',
    age: 20,
    "college": 'BITS',
    '': "Empty string inside person",
    ' ': "Space key ki value hoon mei",
    'last name': "Gupta"
}

console.log(person); // To print all the details of a person
// This helps us to find the values in constant time O(1)
console.log("Name", person.name);
console.log("age", person.age);
console.log("college", person.college);

// Another way to fetch key ki values
console.log("Name", person["name"]);
console.log("age", person["age"]);
console.log("college", person["college"]);

// on '' and " " as keys we cannot use dot operator
console.log(person['']);
console.log(person[' ']);
// console.log(person.last name); // Error dega yeh
console.log(person['last name']); // When key has space in between then we use string