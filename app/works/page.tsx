import prisma from "@/lib/prisma";
import AllWorks from "@/components/works/all-works";

export default async function Works() {
  const allWorksGroups = await prisma.work.groupBy({
    by: ['categoryId'],
  })

  const allWorks = await Promise.all(
    allWorksGroups.map(async g => ({
      category: await prisma.category.findFirst({
        where: {
          id: g.categoryId
        }
      }),
      works: await prisma.work.findMany({
        where: {
          categoryId: g.categoryId
        }
      })
    }))
  );

  return (
      <AllWorks allWorks={allWorks} />
  );
}