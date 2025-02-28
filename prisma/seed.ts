const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Заполнение базы данных...");

  // Создаём мастеров
  const master1 = await prisma.master.create({
    data: {
      name: "Алексей",
      surname: "Иванов",
      photoUrl: "./masters/master_1.png",
      description: "Опытный барбер",
      description_additional: "Работает в стиле классики и фейдов",
      stars: 5,
      cutsAmount: 1500,
      rankId: 1,
    },
  });

  const master2 = await prisma.master.create({
    data: {
      name: "Максим",
      surname: "Петров",
      photoUrl: "/images/masters/maxim.jpg",
      description: "Мастер окрашивания",
      description_additional: "Специалист по сложным техникам окрашивания",
      stars: 4,
      cutsAmount: 2300,
      rankId: 2,
    },
  });

  // Добавляем категории (если они ещё не добавлены в базе)
  const category1 = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: { name: "Стрижки" },
  });

  const category2 = await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: { name: "Окрашивания" },
  });

  // Добавляем работы мастерам с правильными связями
  await prisma.work.create({
    data: {
      photoUrl: "/images/works/work1.jpg",
      description: "Классический фейд",
      master: {
        connect: { id: master1.id }, // Подключаем мастера через ID
      },
      category: {
        connect: { id: category1.id }, // Подключаем категорию через ID
      },
    },
  });

  await prisma.work.create({
    data: {
      photoUrl: "/images/works/work2.jpg",
      description: "Современный кроп",
      master: {
        connect: { id: master1.id }, // Подключаем мастера через ID
      },
      category: {
        connect: { id: category1.id }, // Подключаем категорию через ID
      },
    },
  });

  await prisma.work.create({
    data: {
      photoUrl: "/images/works/work3.jpg",
      description: "Балаяж",
      master: {
        connect: { id: master2.id }, // Подключаем мастера через ID
      },
      category: {
        connect: { id: category2.id }, // Подключаем категорию через ID
      },
    },
  });

  console.log("База данных заполнена!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
