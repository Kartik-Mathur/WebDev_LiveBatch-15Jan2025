// 1
import { PrismaClient } from "../generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

// 2
const prisma = new PrismaClient().$extends(withAccelerate());

// 3
async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: "shahnawaz@google.com",
      name: "Shahnawaz Saifi",
    },
  });

  console.log("Created user:", newUser);
}

async function createMany() {
  const newUser = await prisma.user.createMany({
    data: [
      { email: "Prabhsimran@atlassian.com", name: "Prabh Simran" },
      { email: "Anirudh@zomato.com", name: "Anirudh" },
      { email: "Arnab@atlassian.com", name: "Arnab" },
    ],
  });

  console.log("Created user:", newUser);
}

// 4
createMany()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    // 5
    await prisma.$disconnect();
    process.exit(1);
  });
