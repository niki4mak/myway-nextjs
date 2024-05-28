"use client";

import { memo } from "react";
import {PersonCard} from "@/components/shared/person-card/person-card";
import {IYMastersResponse} from "../../../data/model/yclients/model";
import useMediaQuery from "@/lib/hooks/use-media-query";

interface ISelectPersonTabProps {
  masters: IYMastersResponse;
}

const SelectPersonTab = memo<ISelectPersonTabProps>(({
    masters
}) => {
  const persons = Array(24).fill(null);
    const { isMobile} = useMediaQuery();

 return (
  <div className={`w-full grid ${isMobile ? "grid-cols-3" : ""}gap-x-[100px] gap-y-2`}>
    {masters.map((it, index) => <PersonCard
        key={`Person-Card-${index}`}
        master={it}
    />)}
  </div>
 );
})
SelectPersonTab.displayName = "SelectPersonTab"

export { SelectPersonTab };