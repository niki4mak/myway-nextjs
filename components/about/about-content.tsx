"use client";

import {memo} from "react";
import Image from "next/image";
import useMediaQuery from "@/lib/hooks/use-media-query";
import { text } from "stream/consumers";

const AboutContent = memo(() => {
  const {isMobile} = useMediaQuery();

  return (
    <div className={`relative flex w-full items-center justify-center ${isMobile ? "flex-col" : "pt-32"}`}>

      

      <p className={isMobile ? "text-center w-2/3 z-10 py-20" : "text-center w-1/2 z-10"}>
        В самом сердце города расположился уютный и стильный Барбершоп MyWay, ставший настоящим убежищем для
        ценителей классического стиля и качественного сервиса. Здесь каждый клиент погружается в атмосферу настоящего
        джентльменского клуба, где звучит джазовая музыка, а аромат свежевыжатого кофе наполняет воздух.
        Профессиональные мастера-барберы владеют искусством стрижки и бритья до мельчайших деталей, создавая
        неповторимые образы, сочетающие в себе элегантность и современные тенденции. Каждый посетитель MyWay уходит
        отсюда не только с прекрасной стрижкой, но и с непередаваемым чувством уверенности и удовлетворения.
      </p>

      <div className={`absolute top-0 w-full flex ${isMobile ? "flex-col h-full" : "h-fit"}`}>
        <Image className={isMobile ? "h-1/2" : "w-1/2"} src={"/about/about-bg-1.png"} alt={"Background"} width={1920}
               height={1698}/>
        <Image className={isMobile ? "h-1/2" : "w-1/2"} src={"/about/about-bg-2.png"} alt={"Background"} width={1920}
               height={1698}/>
      </div>

    </div>
  );
})
AboutContent.displayName = "AboutContent"

export {AboutContent};