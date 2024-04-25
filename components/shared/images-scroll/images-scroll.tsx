import {memo} from "react";
import Image from "next/image";

interface ImagesScrollProps {
  width?: number;
  height?: number;
  imagesUrls: string[];
}

const ImagesScroll = memo<ImagesScrollProps>(({
  imagesUrls,
  width = 1110,
  height = 1518
                                              }) => {
  return (
    <div className={"h-full flex overflow-x-auto"}>
      {imagesUrls.map(url =>
        <Image
          className={"h-full object-cover"}
          src={url}
          alt={"Image"}
          key={url}
          width={width}
          height={height}
        />
      )}
    </div>
  );
});
ImagesScroll.displayName = "ImagesScroll";

export default ImagesScroll;