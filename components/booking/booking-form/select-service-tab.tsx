"use client";

import {Dispatch, memo, SetStateAction} from "react";
import {ServiceForm} from "@/components/service-form/service-form";
import {IWithCategoriesWithServicesAndPrices} from "../../../data/model/prisma/service";
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
    <ServiceForm
      YCategoriesWithServices={YCategoriesWithServices}
      categoriesWithServices={categoriesWithServices}
      selectedServices={selectedServices}
      selectCallBack={selectCallBack}
      isSelecting={true}
    />
  );
})
SelectServiceTab.displayName = "SelectServiceTab"

export {SelectServiceTab};