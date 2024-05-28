"use client";

import React, {memo, useState} from "react";
import {SelectPersonTab} from "@/components/booking/booking-form/select-person-tab";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {SelectServiceTab} from "@/components/booking/booking-form/select-service-tab";
import {SelectTimeTab} from "@/components/booking/booking-form/select-time-tab";
import { IYBasicData } from "data/model/yclients/model";
import useMediaQuery from "@/lib/hooks/use-media-query";
import {PersonCard} from "@/components/shared/person-card/person-card";
import ButtonSolid from "@/components/shared/button/button-solid";

interface IBookingFormProps {
  data: IYBasicData;
}

const BookingForm = memo<IBookingFormProps>(({
                                                                  data
                                                                }) => {
    const { isMobile } = useMediaQuery();
  const [tabIndex, setTabIndex] = useState(0);

  const tabClassname = "bg-c-bg-dark rounded-[50px] h-[48px] grid place-content-center"
  const tabActiveClassname = "bg-c-primary-darken border-b-c-primary border-b-[3px]"
  const panelClassName = "w-full h-full m-4 overflow-auto";

  const [selectedMaster, setSelectedMaster] = useState<number | null>(null);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [dateTime, setDateTime] = useState<Date | null>(null);

  const handleNextStep = () => tabIndex < 2
    ? setTabIndex(prev => prev + 1)
    : () => {
    };

  return (
    <div className={"h-[75vh] w-full flex flex-col justify-center gap-16"}>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className={"h-full"}
        selectedTabClassName={tabActiveClassname}
        selectedTabPanelClassName={panelClassName}
      >
        <TabList className={"grid grid-flow-col auto-cols-[1fr] text-center gap-4 px-4"}>
          <Tab className={tabClassname}>Специалисты</Tab>
          <Tab className={tabClassname}>Услуги</Tab>
          <Tab className={tabClassname}>Дата и время</Tab>
        </TabList>
        <div className={"flex justify-center w-full h-full"}>
          {(selectedMaster || selectedServices.length || dateTime)
            ? <div className={"flex flex-col gap-4"}>
              {selectedMaster ? <PersonCard master={data.masters.find(m => m.id === selectedMaster)}/> : null}
              {selectedServices.length
                ? <div className={""}>
                  <div className={""}>Выбранные услуги:</div>
                  <div className={"flex flex-col gap-2 text-c-primary"}>
                    {selectedServices.map(s1 => {
                        const s = data.services.services.find(it => it.id === s1);

                        return (<div key={`SelectedService-${s}`}>
                          <div>{s?.title}</div>
                          <div>{`${s?.price_min === s?.price_max ? s?.price_min : `${s?.price_min} - ${s?.price_max}`} BYN`}</div>
                        </div>)
                      }
                    )
                    }
                  </div>
                </div>
                : null
              }
              {dateTime
                ? (
                  <div>
                    <div className={""}>Выбранный сеанс:</div>
                    <div className={"text-c-primary"}>
                      <div className={"text-xl"}>
                        {dateTime?.toLocaleDateString()}
                      </div>
                      <div className={"text-2xl"}>
                        {dateTime?.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                )
                : null
              }
              <ButtonSolid clickHandler={handleNextStep} text={"Перейти к следующему шагу"}/>
            </div>
            : null
          }
          <TabPanel>
            <SelectPersonTab
              selectedMaster={selectedMaster}
              setSelectedMaster={setSelectedMaster}
              masters={data.masters}
            />
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
        </div>
      </Tabs>
    </div>
  );
})
BookingForm.displayName = "BookingForm";

export {BookingForm};