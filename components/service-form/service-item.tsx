"use client";

import {Dispatch, memo, SetStateAction} from "react";
import {Service} from "@prisma/client";
import Image from "next/image";
import {Checkbox} from "@/components/shared/checkbox";

interface IServiceItemProps {
  service?: Service;
  isSelecting?: boolean;
  selectedServices?: number[];
  selectCallBack?: Dispatch<SetStateAction<number[]>>;
}

// TODO REMOVE
const MOCK_ICON_URL = "/services/service-icon-1.svg";

const ServiceItem = memo<IServiceItemProps>(({
                                               service,
                                               isSelecting,
                                               selectedServices,
                                               selectCallBack
}) => {
  if (!service) return null;

  const handleAddService = () => selectCallBack
    ? selectCallBack(prev => [...prev, service.id])
    : null;

  const handleRemoveService = () => selectCallBack && service
    ? selectCallBack(prev => prev.filter(it => it !== service.id))
    : null;

  const isSelected = selectedServices?.find(it => it === service?.id);

  const handleClick = isSelected
    ? handleRemoveService
    : handleAddService;

 return (
  <div className={"w-full gap-4 grid grid-cols-[max-content_1fr_max-content_max-content]"}>
    <Image src={service.icon || MOCK_ICON_URL} width={47} height={67} alt={"Service Icon"}/>
    <div className={"flex flex-col gap-2"}>
      <div>{service.title}</div>
      <div>{service.description}</div>
    </div>
    <div className={""}>

    </div>
    {
      isSelecting
        ? <Checkbox value={!!isSelected} handleClick={handleClick} />
        : null
    }
  </div>
 );
})
ServiceItem.displayName = "ServiceItem"

export { ServiceItem };