"use client";

import {Dispatch, memo, SetStateAction, useState} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ServiceItem} from "@/components/service-form/service-item";
import {TCategoryWithServicesAndPrices} from "../../data/model/prisma/service";
import {IYServicesResponse} from "../../data/model/yclients/model";
import {TabSelect} from "@/components/shared/tab-select";
import useMediaQuery from "@/lib/hooks/use-media-query";

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
                                              isSelecting,
                                              ...props
                                            }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const {isMobile} = useMediaQuery();

  const tabActiveClassname = "border-b-2 border-black focus:outline-none"
  const panelClassName = `h-[90%] py-4 flex flex-col gap-4 overflow-auto ${isSelecting ? "" : "p-4"}`;

  const YCategories = YCategoriesWithServices?.category;
  const YServices = YCategoriesWithServices?.services;

  let TabsItems, TabPanels;
  if (YServices && YCategories) {
    TabsItems = YCategories.map(it => (
      <Tab className={"py-2"} key={`Tab-Category-${it.id}`}>{it.title}</Tab>
    ));

    TabPanels = YCategories.map(c => (
      <TabPanel key={`TabPanel-${c.id}`}>
        {YServices.filter(s1 => s1.category_id === c.id).map(s =>
          <ServiceItem
            {...props}
            isSelecting={isSelecting}
            id={s.id}
            title={s.title}
            description={s.comment}
            priceMin={s.price_min}
            priceMax={s.price_max}
            key={`Service-${s.id}`}
          />)}
      </TabPanel>
    ));
  } else {
    TabsItems = categoriesWithServices?.map(it => (
      <Tab className={"py-2"} key={`Tab-Category-${it.id}`}>{it.name}</Tab>
    ));

    TabPanels = categoriesWithServices?.map(c => (
      <TabPanel className={"w-full"} key={`TabPanel-${c.id}`}>
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
    <div className={"h-full w-full flex flex-col justify-center"}>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className={"h-full"}
        selectedTabClassName={tabActiveClassname}
        selectedTabPanelClassName={panelClassName}
      >
        {
          isMobile ? <TabSelect
            setSelected={setTabIndex}
            selectedIndex={tabIndex}
            categories={YCategories}
          /> : <TabList className={"w-full grid grid-flow-col auto-cols-[1fr] text-center gap-4 px-4"}>
            {TabsItems}
          </TabList>
        }
        {TabPanels}
      </Tabs>

      {/* // Блок с простым списком категорий с минимальной ценой
      <div className="mt-8 px-4">
        <h3 className="text-2xl font-bold mb-2">Все категории</h3>
        <ul className="list-disc pl-6">
          {YCategories ? (
            YCategories.map(c => {
              // Вычисляем минимальную цену для категории
              const prices = YServices
                .filter(s => s.category_id === c.id)
                .map(s => s.price_min);
              const minPrice = prices.length ? Math.min(...prices) : null;
              return (
                <li key={c.id} className="text-lg">
                  {c.title} {minPrice !== null && <span>от {minPrice} руб</span>}
                </li>
              );
            })
          ) : (
            categoriesWithServices?.map(c => (
              <li key={c.id} className="text-lg">
                {c.name} {c.min_price && <span>от {c.min_price} руб</span>}
              </li>
            ))
          )}
        </ul>
      </div> */}


    </div>
  );
})
ServiceForm.displayName = "ServiceForm";

export {ServiceForm};