let person = {
    name: 'Coding blocks',
    age: 10,
    description: 'Best place to learn coding',
    courses: ['CPP','Java']
}

console.log(JSON.stringify(person));
let data = JSON.stringify(person);
console.log(JSON.parse(data));