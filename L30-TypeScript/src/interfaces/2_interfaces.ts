interface User {
  name: string;
  age: number;
};

interface User{
    address: string;
}

function createUser(name: string, age: number): User {
  return {
    name,
    age,
    address: "Delhi",
  };
}

let user: User = createUser("Aman", 24);
console.log(user);
