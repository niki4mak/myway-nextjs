import {MetadataRoute} from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const users = await prisma.user.findMany({
  //   select: {
  //     id: true,
  //   },
  //   take: 1,
  // });

  return [
    {
      url: "https://myway-nextjs.vercel.app",
      lastModified: new Date(),
    },
    // ...users.map((user) => ({
    //   url: `https://precedent.dev/${user.id}`,
    //   lastModified: new Date(),
    // })),
  ];
}
