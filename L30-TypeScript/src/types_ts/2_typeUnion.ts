type Mentor = "Kartik" | "Monu" | "Abhishek";
let teacher : Mentor;

teacher = "Monu";
console.log(teacher);

type Admins = "Arnab" | "Aman";

type MentorOrAdmins = Mentor | Admins;

let myUser: MentorOrAdmins;

myUser = "Arnab";
console.log(myUser);