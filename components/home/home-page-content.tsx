"use client";

import {memo} from 'react';
import Image from "next/image";
import useMediaQuery from "@/lib/hooks/use-media-query";
import LinkSolid from "@/components/shared/link/link-solid";

const HomePageContent = memo(() => {
  const {isMobile} = useMediaQuery();

  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex items-center justify-center">
      {/* Фоновое изображение */}
      <Image
        className="absolute top-[100px] left-0 w-[100vw-40px] px-5 h-[calc(100vh-100px)] object-cover object-left z-0 rounded-80"
        width={3689}
        height={0}
        src="/main/bg-main-test.jpg"
        alt="MyWay"
        style={{
          WebkitMaskImage: "linear-gradient(to top, rgba(255,255,255,0) 5%, rgba(255,255,255,1) 45%)",
          maskImage: "linear-gradient(to top, rgba(255,255,255,0) 5%, rgba(255,255,255,1) 45%)",
        }}
      />

      {/* Контент по центру */}
      <div className="z-10 flex flex-col px-10 justify-center items-center gap-2 text-center">
        <div className="font-display font-medium text-3xl text-white uppercase">
          Уникальный путь <br /> к твоему образу с My Way
        </div>
        <div className="text-white">
          Откройте новый уровень стиля с услугами в нашем салоне
        </div>
        <LinkSolid text={"Записаться"} href={"/booking"} />
      </div>
    </div>

  )
    ;
});
HomePageContent.displayName = "HomePageContent";

export default HomePageContent;