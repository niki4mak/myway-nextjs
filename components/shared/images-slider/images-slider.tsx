"use client"

import Link from "next/link";
import {memo} from "react";
import Image from "next/image";
import useMediaQuery from "@/lib/hooks/use-media-query";

interface ImageWithPath {
  imageWidth?: number;
  imageHeight?: number;
  imageUrl: string;
  path: string;
  alt?: string;
}

interface ImagesSliderProps {
  items: ImageWithPath[];
}

const Slide = memo<ImageWithPath>(({
  imageWidth = 392,
  imageHeight = 1118,
  imageUrl,
  path,
  alt,
}) => {
  return (
    <Link
      className={"box-border bg-black opacity-60 hover:opacity-100 hover:border hover:border-c-primary"}
      href={path}
    >
      <Image
        width={imageWidth}
        height={imageHeight}
        className={""}
        src={imageUrl}
        alt={alt || "Мастер"}
      />
    </Link>
  )
})
Slide.displayName = "Slide";

const ImagesSlider = memo<ImagesSliderProps>(({
                                              items
                                            }) => {
  const { isMobile} = useMediaQuery();

  const mobileClassName = "grid grid-cols-3 grid-rows-3";
  const desktopClassName = "grid grid-cols-9";

  return (
    <div className={isMobile ? mobileClassName : desktopClassName}>
      {items.map(it => <Slide {...it} key={`Slide-${it.imageUrl}`}/> )}
    </div>
  );
});
ImagesSlider.displayName = "ImagesSlider";

export default ImagesSlider;