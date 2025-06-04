// 1
import { PrismaClient } from "../generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

// 2
const prisma = new PrismaClient().$extends(withAccelerate());

// 3
async function main() {
  const allUsers = await prisma.user.findUnique({
    where: {
        id: 1
    },
  });

  console.log("All Users", allUsers);
}

// 4
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    // 5
    await prisma.$disconnect();
    process.exit(1);
  });
