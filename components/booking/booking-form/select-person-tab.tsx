"use client";

import {Dispatch, memo, SetStateAction} from "react";
import {PersonCard} from "@/components/shared/person-card/person-card";
import {IYMastersResponse} from "../../../data/model/yclients/model";

interface ISelectPersonTabProps {
  masters: IYMastersResponse;
  selectedMaster?: number | null;
  setSelectedMaster?: Dispatch<SetStateAction<number | null>>;
}

const SelectPersonTab = memo<ISelectPersonTabProps>(({
                                                       masters,
                                                       ...props
                                                     }) => {
  const persons = Array(24).fill(null);

  return (
    <div className={"w-full grid grid-cols-3 gap-x-[100px] gap-y-2"}>
      {masters.map((it, index) => <PersonCard
        {...props}
        key={`Person-Card-${index}`}
        master={it}
      />)}
    </div>
  );
})
SelectPersonTab.displayName = "SelectPersonTab"

export {SelectPersonTab};