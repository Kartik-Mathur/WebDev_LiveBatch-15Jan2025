type UserType = {
  name: string;
  age: number;
  address: string;
};

function generateUser(name: string, age: number): UserType {
  return {
    name,
    age,
    address: "Delhi",
  };
}

let user1: UserType = generateUser("Aman", 24);
console.log(user1);
