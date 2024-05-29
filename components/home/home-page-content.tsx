"use client";

import {memo} from 'react';
import Image from "next/image";
import useMediaQuery from "@/lib/hooks/use-media-query";

const HomePageContent = memo(() => {
    const { isMobile} = useMediaQuery();

    return (
        <>
            <Image
                className={`absolute h-full object-cover object-left z-0`}
                width={3840}
                height={1960}
                src={"/main/bg-main@2x.png"}
                alt="Precedent Logo"
            />

            <div className={`w-full ${isMobile ? "" : "ml-[100%]"} flex flex-col items-center`}>
                <div className={"flex items-center font-display text-6xl justify-center"}>MY WAY</div>
                <div className={"text-center"}>Стандарты высоко качества - то, чем мы <br/>руководствуемся</div>
            </div>
        </>
)
    ;
});
HomePageContent.displayName = "HomePageContent";

export default HomePageContent;