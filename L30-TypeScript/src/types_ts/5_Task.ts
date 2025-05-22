type Mentor = {
  name: string;
  teaches: string;
};

type CommunityManager = {
  name: string;
  manages: string;
};

type TeamMember = Mentor | CommunityManager;

const kartik: TeamMember = {
  name: "Kartik",
  teaches: "Web Dev",
};

const Abhishek: TeamMember = {
  name: "Abhishek",
  manages: "Discord",
};

function describe(member: TeamMember): void {
  console.log("Name:", member.name);
}

describe(kartik);
describe(Abhishek);
