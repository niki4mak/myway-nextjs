"use client";

import {Dispatch, memo, SetStateAction} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ServiceItem} from "@/components/service-form/service-item";
import {TCategoryWithServicesAndPrices} from "../../data/model/service";

interface ServiceFormProps {
  categoriesWithServices?: TCategoryWithServicesAndPrices[];
  isSelecting?: boolean;
  selectedServices?: number[];
  selectCallBack?: Dispatch<SetStateAction<number[]>>;
}

const ServiceForm = memo<ServiceFormProps>(({
                                              categoriesWithServices,
                                              ...props
                                            }) => {
  const tabActiveClassname = "border-b-c-primary border-b-[2px]"
  const panelClassName= "h-full m-4 overflow-auto flex flex-col gap-4";

  const TabsItems = categoriesWithServices?.map(it => (
    <Tab className={"py-2"}>{it.name}</Tab>
  ));

  const TabPanels = categoriesWithServices?.map(c => (
    <TabPanel>
      {c.services.map(s => <ServiceItem {...props} service={s}/>)}
    </TabPanel>
  ));

  return (
    <div className={"h-full w-full flex flex-col p-4 justify-center"}>
      <Tabs className={"h-full"} selectedTabClassName={tabActiveClassname} selectedTabPanelClassName={panelClassName}>
        <TabList className={"grid grid-flow-col auto-cols-[1fr] text-center gap-4 px-4"}>
          {TabsItems}
        </TabList>
        {TabPanels}
      </Tabs>
    </div>
  );
})
ServiceForm.displayName = "ServiceForm";

export { ServiceForm };