"use client";

import {Dispatch, memo, SetStateAction} from "react";
import {ServiceForm} from "@/components/service-form/service-form";
import {IWithCategoriesWithServicesAndPrices, TCategoryWithServicesAndPrices} from "../../../data/model/prisma/service";
import {PersonCard} from "@/components/shared/person-card/person-card";
import ButtonSolid from "@/components/shared/button/button-solid";
import {IYServicesResponse} from "../../../data/model/yclients/model";

interface ISelectServiceTabProps extends IWithCategoriesWithServicesAndPrices {
    YCategoriesWithServices?: IYServicesResponse;
 selectedServices?: number[];
 selectCallBack?: Dispatch<SetStateAction<number[]>>;
}

const SelectServiceTab = memo<ISelectServiceTabProps>(({
 categoriesWithServices,
                                                           YCategoriesWithServices,
                                                        selectedServices,
                                                        selectCallBack
}) => {
 return (
   <div className={"grid grid-cols-[1fr_3fr] gap-4"}>
     <div className={"flex flex-col gap-4 justify-between"}>
       <PersonCard />
       <ButtonSolid text={"Выбрать услугу"} />
     </div>
     <ServiceForm
         YCategoriesWithServices={YCategoriesWithServices}
       categoriesWithServices={categoriesWithServices}
       selectedServices={selectedServices}
       selectCallBack={selectCallBack}
       isSelecting={true}
     />
   </div>
 );
})
SelectServiceTab.displayName = "SelectServiceTab"

export { SelectServiceTab };