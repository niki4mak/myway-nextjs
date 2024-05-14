"use client";

import {memo, SetStateAction} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {SelectPersonTab} from "@/components/booking/booking-form/select-person-tab";
import {SelectServiceTab} from "@/components/booking/booking-form/select-service-tab";
import {SelectTimeTab} from "@/components/booking/booking-form/select-time-tab";
import {Service} from "@prisma/client"

interface ServiceFormProps {
  services?: Service[];
  isSelecting?: boolean;
  selectCallBack?: SetStateAction<string[]>;
}

const ServiceForm = memo<ServiceFormProps>(({
                                              services,
                                              isSelecting,
                                              selectCallBack,
                                            }) => {
  const tabActiveClassname = "border-b-c-primary border-b-[2px]"
  const panelClassName= "h-full m-4 overflow-auto";

  return (
    <div className={"h-full w-full flex flex-col p-4 justify-center"}>
      <Tabs className={"h-full"} selectedTabClassName={tabActiveClassname} selectedTabPanelClassName={panelClassName}>
        <TabList className={"grid grid-cols-3 text-center gap-4 px-4"}>
          <Tab>Специалисты</Tab>
          <Tab>Услуги</Tab>
          <Tab>Дата и время</Tab>
        </TabList>
        <TabPanel>
          <SelectPersonTab />
        </TabPanel>
        <TabPanel>
          <SelectServiceTab />
        </TabPanel>
        <TabPanel>
          <SelectTimeTab />
        </TabPanel>
      </Tabs>
    </div>
  );
})
ServiceForm.displayName = "ServiceForm";

export { ServiceForm };