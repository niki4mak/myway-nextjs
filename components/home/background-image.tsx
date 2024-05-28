"use client";

import {memo} from 'react';
import Image from "next/image";
import useMediaQuery from "@/lib/hooks/use-media-query";

const BackgroundImage = memo(() => {
    const { isMobile} = useMediaQuery();

    return (
        <Image
            className={`absolute h-full object-cover object-left z-0`}
            width={3840}
            height={1960}
            src={"/main/bg-main@2x.png"}
            alt="Precedent Logo"
        />
    );
});
BackgroundImage.displayName = "BackgroundImage";

export default BackgroundImage;