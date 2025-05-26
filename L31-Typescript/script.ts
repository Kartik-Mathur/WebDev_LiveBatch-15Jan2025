interface PersonInfo {
  name: string;
  age?: number; // This makes the age optional
}

interface StudentInfo {
  readonly marks: number;
  subject: string;
}

interface Student extends PersonInfo, StudentInfo {}

let arnab: Student = {
  name: "Arnab",
  marks: 10,
  subject: "TypeScript",
};

console.log(arnab);
console.log(arnab.marks);