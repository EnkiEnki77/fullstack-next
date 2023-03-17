//when building your ui you want data to be able to for your components to be able to render, thats where seeding data into the db comes into play.

// import { hashPassword } from "@/lib/auth";
// import { db } from "@/lib/db";
import { TASK_STATUS } from "@prisma/client";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getRandomTaskStatus = () => {
  const statuses = [
    TASK_STATUS.COMPLETED,
    TASK_STATUS.NOT_STARTED,
    TASK_STATUS.STARTED,
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

async function main() {
  const user = await prisma.user.upsert({
    where: {email: "asdf@gmail.com"},
    update: {},
    create: {
      email: "user@email.com",
      firstName: "User",
      lastName: "Person",
      password: "password",
      projects: {
        create: new Array(5).fill(1).map((_, i) => ({
          name: `Project ${i}`,
          due: new Date(2022, 11, 25),
        })),
      },
    },
    include: {
      projects: true,
    },
  });

  const tasks = await Promise.all(
    user.projects.map((project) =>
      prisma.task.createMany({
        data: new Array(10).fill(1).map((_, i) => {
          return {
            name: `Task ${i}`,
            ownerId: user.id,
            projectId: project.id,
            description: `Everything that describes Task ${i}`,
            status: getRandomTaskStatus(),
          };
        }),
      })
    )
  );

  console.log({ user, tasks });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });