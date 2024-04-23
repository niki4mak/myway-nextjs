import prisma from "@/lib/prisma";
import ImagesSlider from "@/components/shared/images-slider/images-slider";

export default async function Masters() {
  const masters = await prisma.master.findMany();
  console.log(masters)

  const sliderItems = masters.map(it => ({
    imageUrl: it.photoUrl,
    path: '/masters'
  }));

  return (
    // <div className={"w-screen h-screen top-0 left-0 grid place-content-center"}>
    //   <p>Masters</p>
    // </div>s
    <ImagesSlider items={sliderItems} />
  );
}