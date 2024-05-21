"use client";

import React, {memo, useState} from "react";
import {SelectPersonTab} from "@/components/booking/booking-form/select-person-tab";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {SelectServiceTab} from "@/components/booking/booking-form/select-service-tab";
import {SelectTimeTab} from "@/components/booking/booking-form/select-time-tab";
import { IYBasicData } from "data/model/yclients/model";

interface IBookingFormProps {
  data: IYBasicData;
}

const BookingForm = memo<IBookingFormProps>(({
                                                                  data
                                                                }) => {
  const tabClassname = "bg-c-bg-dark rounded-[50px] h-[48px] grid place-content-center"
  const tabActiveClassname = "bg-c-primary-darken border-b-c-primary border-b-[3px]"
  const panelClassName= "h-full m-4 overflow-auto";

  const [selectedMaster, setSelectedMaster] = useState<number>(-1);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [dateTime, setDateTime] = useState<Date | null>(null);

 return (
   <div className={"h-[75vh] w-full flex flex-col justify-center"}>
     <Tabs className={"h-full"} selectedTabClassName={tabActiveClassname} selectedTabPanelClassName={panelClassName}>
       <TabList className={"grid grid-flow-col auto-cols-[1fr] text-center gap-4 px-4"}>
         <Tab className={tabClassname}>Специалисты</Tab>
         <Tab className={tabClassname}>Услуги</Tab>
         <Tab className={tabClassname}>Дата и время</Tab>
       </TabList>
       <TabPanel>
         <SelectPersonTab masters={data.masters} />
       </TabPanel>
       <TabPanel>
         <SelectServiceTab
           YCategoriesWithServices={data.services}
           selectedServices={selectedServices}
           selectCallBack={setSelectedServices}
         />
       </TabPanel>
       <TabPanel>
         <SelectTimeTab
           dateTime={dateTime}
           setDateTime={setDateTime}
         />
       </TabPanel>
     </Tabs>
   </div>
 );
})
BookingForm.displayName = "BookingForm";

export { BookingForm };