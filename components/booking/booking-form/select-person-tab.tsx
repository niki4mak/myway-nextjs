"use client";

import { memo } from "react";
import {PersonCard} from "@/components/shared/person-card/person-card";

interface ISelectPersonTabProps {
  
}

const SelectPersonTab = memo<ISelectPersonTabProps>(({

}) => {
  const persons = Array(24).fill(null);

 return (
  <div className={"w-full grid grid-cols-3 gap-x-[100px] gap-y-2"}>
    {persons.map((it, index) => <PersonCard key={`Person-Card-${index}`}/>)}
  </div>
 );
})
SelectPersonTab.displayName = "SelectPersonTab"

export { SelectPersonTab };