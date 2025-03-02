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
  const containerClassName = "bg-c-bg-1 bg-cover text-left text-c-bg-3 " +
    "bg-center bg-no-repeat flex gap-4 items-center rounded-3xl border border-transparent";

  const disabled = master?.bookable === false;

  return (
    <button
      disabled={disabled}
      className={cn(containerClassName, isSelected && "border-c-primary", disabled && "opacity-50")}
      onClick={handleSelect}
    >
      <div className={"pl-2 w-[105px]"}>
        <Image
          className={"w-full object-cover rounded-xl"}
          src={master?.avatar || "/person-card.png"}
          width={640}
          height={640}
          alt={"Person"}
        />
      </div>
      <div className={"flex flex-col items-end p-4"}>
        <div className={"w-full font-semibold text-c-text-dark text-xl"}>{master?.name}</div>
        <div className={""}>{master?.specialization}</div>
        <div className={"flex gap-1 w-full"}>
          <Image src="/icons/star-346.svg" alt="star" width={16} height={16}/>
          <div>{master?.rating}</div>
        </div>
        <div className={"w-full"}>{`${master?.comments_count} отзывов`}</div>
      </div>
      
    </button>
  );
})
PersonCard.displayName = "PersonCard"

export {PersonCard};