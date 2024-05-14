"use client";

import {memo, useState} from "react";
import {SelectPersonTab} from "@/components/booking/booking-form/select-person-tab";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {SelectServiceTab} from "@/components/booking/booking-form/select-service-tab";
import {SelectTimeTab} from "@/components/booking/booking-form/select-time-tab";
import {IWithCategoriesWithServicesAndPrices} from "../../../data/model/service";

const BookingForm = memo<IWithCategoriesWithServicesAndPrices>(({
  categoriesWithServices
                                                                }) => {
  const tabClassname = "bg-c-bg-dark rounded-[50px] h-[48px] grid place-content-center"
  const tabActiveClassname = "bg-c-primary-darken border-b-c-primary border-b-[3px]"
  const panelClassName= "h-full m-4 overflow-auto";

  const [selectedMaster, setSelectedMaster] = useState<number>(-1);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [selectedTime, setSelectedTime] = useState<number>(-1);

 return (
   <div className={"h-[80vh] w-full flex flex-col px-[260px] justify-center"}>
     <Tabs className={"h-full"} selectedTabClassName={tabActiveClassname} selectedTabPanelClassName={panelClassName}>
       <TabList className={"grid grid-flow-col auto-cols-[1fr] text-center gap-4 px-4"}>
         <Tab className={tabClassname}>Специалисты</Tab>
         <Tab className={tabClassname}>Услуги</Tab>
         <Tab className={tabClassname}>Дата и время</Tab>
       </TabList>
       <TabPanel>
         <SelectPersonTab />
       </TabPanel>
       <TabPanel>
         <SelectServiceTab
           categoriesWithServices={categoriesWithServices}
           selectedServices={selectedServices}
           selectCallBack={setSelectedServices}
         />
       </TabPanel>
       <TabPanel>
         <SelectTimeTab />
       </TabPanel>
     </Tabs>
   </div>
 );
})
BookingForm.displayName = "BookingForm";

export { BookingForm };