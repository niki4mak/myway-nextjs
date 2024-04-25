import prisma from "@/lib/prisma";
import ImagesSlider from "@/components/shared/images-slider/images-slider";

export default async function Masters() {
  const masters = await prisma.master.findMany();

  const sliderItems = masters.map(it => ({
    imageUrl: it.photoUrl,
    path: '/masters'
  }));

  return (
    <ImagesSlider items={sliderItems} />
  );
}