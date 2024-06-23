"use client";

import {Dispatch, memo, SetStateAction} from "react";
import Image from "next/image";
import {IYMaster} from "../../../data/model/yclients/model";
import {cn} from "@/lib/utils";

interface IPersonCardProps {
  master?: IYMaster;
  selectedMaster?: number | null;
  setSelectedMaster?: Dispatch<SetStateAction<number | null>>;
}

const PersonCard = memo<IPersonCardProps>(({
                                             master,
                                             selectedMaster,
                                             setSelectedMaster
                                           }) => {
  const handleSelect = () => master && setSelectedMaster
    ? setSelectedMaster(master.id)
    : () => {
    };

  const isSelected = selectedMaster === master?.id;
  const containerClassName = "bg-[url('/icons/card-rectangle.svg')] bg-cover text-left text-c-bg-3 " +
    "bg-center bg-no-repeat flex justify-between items-center rounded-3xl border border-transparent";

  const disabled = master?.bookable === false;

  return (
    <button
      disabled={disabled}
      className={cn(containerClassName, isSelected && "border-c-primary", disabled && "opacity-50")}
      onClick={handleSelect}
    >
      <div className={"flex flex-col items-end p-4"}>
        <div className={"w-full font-bold text-c-text-light text-xl"}>{master?.name}</div>
        <div className={""}>{master?.specialization}</div>
        <div className={"flex gap-1 w-full"}>
          <Image src="/icons/star.svg" alt="star" width={16} height={16}/>
          <div>{master?.rating}</div>
        </div>
        <div className={"w-full"}>{`${master?.comments_count} отзывов`}</div>
      </div>
      <div className={"w-[135px]"}>
        <div className={"bg-c-bg-1 w-full h-0.8"}/>
        <Image
          className={"h-full rounded-xl"}
          src={master?.avatar || "/person-card.png"}
          width={640}
          height={640}
          alt={"Person"}
        />
      </div>
    </button>
  );
})
PersonCard.displayName = "PersonCard"

export {PersonCard};