// 1
import { PrismaClient } from "../generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

// 2
const prisma = new PrismaClient().$extends(withAccelerate());

// 3
async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: 'Ashish@swiggy.com',
      name: 'Ashish Gupta',
      posts: {
        create: {
            title: 'Majnu bhai painting',
            content: 'Ghodha Ghadhe ki madad krta hua'
        }
      }
    },
  });

  console.log("Created user:", newUser);
}

async function insertPostInExistingUser() {
  const newPost = await prisma.post.create({
    data: {
      title: 'Monalisa Painting',
      content: 'Amazing Painting Replica',
      author: {
        connect: {
            email: 'Prabhsimran@atlassian.com'
        }
      }
    },
  });

  console.log("Updated user:", newPost);
}


// 4
insertPostInExistingUser()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    // 5
    await prisma.$disconnect();
    process.exit(1);
  });
