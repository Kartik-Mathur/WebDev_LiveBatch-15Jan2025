type Person = {
  name: string;
  age: number;
};

type Student = {
  marks: number;
  class: string;
};

type SchoolKid = Person & Student;

let kid1: SchoolKid = {
  name: "Shahnawaz",
  age: 20,
  marks: 90,
  class: "10th Class",
};

console.log(kid1);
