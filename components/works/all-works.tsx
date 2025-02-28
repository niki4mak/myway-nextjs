"use client";

import {memo, useState} from "react";
import {Category, Work} from "@prisma/client";
import SelectCategory from "@/components/works/select-category";
import ImagesScroll from "@/components/shared/images-scroll/images-scroll";

interface AllWorksProps {
  allWorks: {
    category: Category | null,
    works: Work[] | null,
  }[];
}

const AllWorks = memo<AllWorksProps>(({
  allWorks
                                      }) => {
  const categories = allWorks.map(it =>
    it.category
  );

  const [selectedId, setSelectedId] =
    useState(categories[0]?.id || 0);

  const works = allWorks.find(it =>
    it.category?.id === selectedId
  )?.works?.map(w => w.photoUrl);

  return (
    <div className={"relative h-[calc(100vh-100px)]"}>
      <div className={"h-full"}>
        {works ? <ImagesScroll key={selectedId} imagesUrls={works} /> : null }
      </div>
      <SelectCategory
        categories={categories}
        selected={selectedId}
        setSelected={setSelectedId}
      />
    </div>
  );
});
AllWorks.displayName = "AllWorks";

export default AllWorks;