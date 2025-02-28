import prisma from "@/lib/prisma";
import ImagesSlider from "@/components/shared/images-slider/images-slider";
import TeamCarousel from "@/components/masters/team-carousel";
import MasterWorks from "@/components/masters/master-works";

export default async function Masters() {
  /* const masters = await prisma.master.findMany();

  const sliderItems = masters.map(it => ({
    imageUrl: it.photoUrl,
  })); */

  const masters = await prisma.master.findMany({
    include: {
      works: true, // Подключаем работы мастера
    },
  });

  return (
      <div className={"w-screen h-[1685px] flex flex-col  bg-gradient-to-b from-[#B7B5B5] to-[#F5F5F5] rounded-80"}>
          <TeamCarousel masters={masters} />
          
      </div>

     // <ImagesSlider masters={masters}/>
  );
}