"use client"

import Link from "next/link";
import {memo} from "react";
import Image from "next/image";

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
      className={""}
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
  return (
    <div className={"grid grid-cols-9"}>
      {items.map(it => <Slide {...it} key={`Slide-${it.imageUrl}`}/> )}
    </div>
  );
});
ImagesSlider.displayName = "ImagesSlider";

export default ImagesSlider;