"use client";

import {Dispatch, memo, SetStateAction} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ServiceItem} from "@/components/service-form/service-item";
import {TCategoryWithServicesAndPrices} from "../../data/model/prisma/service";
import {IYServicesResponse} from "../../data/model/yclients/model";

interface ServiceFormProps {
    YCategoriesWithServices?: IYServicesResponse;
  categoriesWithServices?: TCategoryWithServicesAndPrices[];
  isSelecting?: boolean;
  selectedServices?: number[];
  selectCallBack?: Dispatch<SetStateAction<number[]>>;
}

const ServiceForm = memo<ServiceFormProps>(({
                                              categoriesWithServices,
                                                YCategoriesWithServices,
                                              ...props
                                            }) => {
  const tabActiveClassname = "border-b-c-primary border-b-[2px]"
  const panelClassName= "h-full m-4 overflow-auto flex flex-col gap-4";

    const YCategories = YCategoriesWithServices?.category;
    const YServices = YCategoriesWithServices?.services;

    console.log(YCategories, YServices)

    let TabsItems, TabPanels;
  if (YServices && YCategories) {
      TabsItems = YCategories.map(it => (
          <Tab className={"py-2"} key={`Tab-Category-${it.id}`}>{it.title}</Tab>
      ));

      TabPanels = YCategories.map(c => (
          <TabPanel key={`TabPanel-${c.id}`}>
              {YServices.filter(s1 => s1.category_id === c.id).map(s => <ServiceItem {...props}
                                                id={s.id}
                                                title={s.title}
                                                description={s.comment}
                                                key={`Service-${s.id}`}
              />)}
          </TabPanel>
      ));
  } else {
      TabsItems = categoriesWithServices?.map(it => (
          <Tab className={"py-2"} key={`Tab-Category-${it.id}`}>{it.name}</Tab>
      ));

      TabPanels = categoriesWithServices?.map(c => (
          <TabPanel key={`TabPanel-${c.id}`}>
              {c.services.map(s => <ServiceItem {...props}
                                                id={s.id}
                                                title={s.title}
                                                description={s.description}
                                                key={`Service-${s.id}`}
              />)}
          </TabPanel>
      ));
  }

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