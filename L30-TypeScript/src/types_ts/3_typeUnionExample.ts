type People = {
  name: string;
  age: number;
};

type College = {
  marks: number;
  class: string;
};

type CollegeKid = Person | Student;

let kid: CollegeKid = {
  name: "Shahnawaz",
  age: 20,
};

console.log(kid);
