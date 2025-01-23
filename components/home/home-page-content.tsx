"use client";

import {memo} from 'react';
import Image from "next/image";
import useMediaQuery from "@/lib/hooks/use-media-query";
import LinkSolid from "@/components/shared/link/link-solid";

const HomePageContent = memo(() => {
  const {isMobile} = useMediaQuery();

  return (
    <>
      <Image
        className={`absolute h-full object-cover object-left z-0`}
        width={3840}
        height={1960}
        src={"/main/bg-main-preview.png"}
        alt="MyWay"
      />

      <div className={`w-full ${isMobile ? "" : "ml-[100%]"} flex flex-col items-center gap-2`}>
        <div className={"flex items-center font-display text-6xl justify-center"}>MY WAY</div>
        <div className={"text-center"}>Уникальный путь  <br/>к твоему образу с My Way!!!</div>
        {isMobile ? <LinkSolid text={"Записаться онлайн"} href={"/booking"}/> : null}
      </div>
    </>
  )
    ;
});
HomePageContent.displayName = "HomePageContent";

export default HomePageContent;