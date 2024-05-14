"use client";

import { memo } from "react";
import {Master} from "@prisma/client";
import Image from "next/image";

interface IPersonCardProps {
  master?: Master;
}

const PersonCard = memo<IPersonCardProps>(({
  master
}) => {
 return (
  <div className={"bg-[url('/icons/card-rectangle.svg')] bg-cover bg-center flex justify-between items-center rounded-3xl"}>
    <div className={"flex flex-col p-4"}>
      <div className={""}>Никита</div>
      <div className={""}>Все виды стрижек</div>
      <div className={"flex gap-1"}>
        <Image src="/icons/star.svg" alt="star" width={16} height={16}/>
        <div>319</div>
      </div>
      <div className={""}>~5000 сделаных стрижек</div>
    </div>
    <div className={"w-[135px]"}>
      <div className={"bg-c-bg-dark w-full h-0.8"} />
      <Image
        className={""}
        src={"/person-card.png"}
        width={271}
        height={393}
        alt={"Person"}
      />
    </div>
  </div>
 );
})
PersonCard.displayName = "PersonCard"

export { PersonCard };