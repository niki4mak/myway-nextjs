import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const masters = await prisma.master.findMany();
  console.log(masters);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
