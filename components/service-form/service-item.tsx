"use client";

import {Dispatch, memo, SetStateAction} from "react";
import Image from "next/image";
import {Checkbox} from "@/components/shared/checkbox";

interface IServiceItemProps {
  id: number;
  title: string;
  description: string;
  priceMin?: number;
  priceMax?: number;
  icon?: string;
  isSelecting?: boolean;
  selectedServices?: number[];
  selectCallBack?: Dispatch<SetStateAction<number[]>>;
}

// TODO REMOVE
const MOCK_ICON_URL = "/services/service-icon-1.svg";

const ServiceItem = memo<IServiceItemProps>(({
                                               id,
                                               title,
                                               description,
                                               icon,
                                               isSelecting,
                                               selectedServices,
                                               selectCallBack,
                                               priceMin,
                                               priceMax,
                                             }) => {
  if (!id) return null;

  const handleAddService = () => selectCallBack
    ? selectCallBack(prev => [...prev, id])
    : null;

  const handleRemoveService = () => selectCallBack && id
    ? selectCallBack(prev => prev.filter(it => it !== id))
    : null;

  const isSelected = selectedServices?.find(it => it === id);

  const handleClick = isSelected
    ? handleRemoveService
    : handleAddService;

  return (
    <div className={"w-full gap-4 grid grid-cols-[max-content_1fr_max-content_max-content]"}>
      <Image src={icon || MOCK_ICON_URL} width={47} height={67} alt={"Service Icon"}/>
      <div className={"flex flex-col gap-2"}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <div className={"text-2xl"}>
        {`${priceMin === priceMax ? priceMin : `${priceMin} - ${priceMax}`} BYN`}
      </div>
      {
        isSelecting
          ? <Checkbox value={!!isSelected} handleClick={handleClick}/>
          : null
      }
    </div>
  );
})
ServiceItem.displayName = "ServiceItem"

export {ServiceItem};