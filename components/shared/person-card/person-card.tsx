"use client";

import { memo } from "react";
import {Master} from "@prisma/client";
import Image from "next/image";
import {IYMaster} from "../../../data/model/yclients/model";

interface IPersonCardProps {
  master?: IYMaster;
}

const PersonCard = memo<IPersonCardProps>(({
  master
}) => {
 return (
  <div className={"bg-[url('/icons/card-rectangle.svg')] bg-cover bg-center flex justify-between items-center rounded-3xl"}>
    <div className={"flex flex-col p-4"}>
      <div className={""}>{master?.name}</div>
      <div className={""}>{master?.specialization}</div>
      <div className={"flex gap-1"}>
        <Image src="/icons/star.svg" alt="star" width={16} height={16}/>
        <div>{master?.rating}</div>
      </div>
      <div className={""}>{`${master?.weight}~ сделаных стрижек`}</div>
    </div>
    <div className={"w-[135px]"}>
      <div className={"bg-c-bg-dark w-full h-0.8"} />
      <Image
        className={""}
        src={master?.avatar || "/person-card.png"}
        width={100}
        height={100}
        alt={"Person"}
      />
    </div>
  </div>
 );
})
PersonCard.displayName = "PersonCard"

export { PersonCard };