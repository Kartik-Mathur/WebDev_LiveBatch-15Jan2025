let person = {
    //  key : value,
    name: 'Ashish',
    age: 20,
    "college": 'BITS',
    '': "Empty string inside person",
    ' ': "Space key ki value hoon mei",
    'last name': "Gupta"
}

// For-In loop
// For every 'key->k' that is present inside person object
for (let k in person) {
    console.log(k, ' : ', person[k]);
}

person['country'] = "India";
console.log(person);

delete person.country;
console.log(person);