import {memo} from "react";
import {Master} from "@prisma/client";
import Image from "next/image";
import LinkSolid from "@/components/shared/link/link-solid";
import useMediaQuery from "@/lib/hooks/use-media-query";

interface IMastersModalContentProps {
  master: Master;
}

const MastersModalContent = memo<IMastersModalContentProps>(({
                                                               master
                                                             }) => {
  const {isMobile} = useMediaQuery();

  return (
    <div
      className={`${isMobile ? "overflow-auto max-h-[calc(90dvh)] vaul-scrollable" : "h-[calc(80dvh)] w-[calc(80dvw)]"} p-8`}>
      <div className={`flex ${isMobile ? "flex-col gap-4" : "h-full"}`}>
        <div className={`flex ${isMobile ? "flex-col gap-4" : "w-1/2 h-full"} items-center justify-center`}>
          <div className={"relative"}>
            <Image
              width={392}
              height={1118}
              src={master.photoUrl}
              alt={master.name}
              className="w-auto rounded-lg"
            />
            <div className={"absolute top-0 vertical-inner-shadow w-[100%] h-[100%]"}/>
          </div>
          <div className={`${isMobile ? "" : "absolute w-1/3"} text-lg mb-6 top-0`}>
            <h1 className="text-3xl font-bold mb-2">Мастер Никита</h1>
            <p>
              {master.description}
            </p>
          </div>
          <p className={isMobile ? "" : "absolute bottom-0 w-1/2 right-0"}>
            {master.description_additional}
          </p>
        </div>
        <div className={isMobile ? "" : "w-1/2 ml-6"}>
          <div className="flex justify-end">
            <LinkSolid text={"Записаться онлайн"} href={"/booking"}/>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <img src={"/works/cut_m_1.png"} alt="haircut1" className="rounded-lg shadow-lg"/>
            <img src={"/works/cut_m_2.png"} alt="haircut2" className="rounded-lg shadow-lg"/>
            <img src={"/works/cut_m_3.png"} alt="haircut3" className="rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </div>
  )
    ;
})
MastersModalContent.displayName = "MastersModalContent"

export {MastersModalContent};