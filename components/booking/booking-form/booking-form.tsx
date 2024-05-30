"use client";

import React, {memo, useEffect, useState} from "react";
import {SelectPersonTab} from "@/components/booking/booking-form/select-person-tab";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {SelectServiceTab} from "@/components/booking/booking-form/select-service-tab";
import {SelectTimeTab} from "@/components/booking/booking-form/select-time-tab";
import {IYBasicData, IYNearestSeancesResponse} from "data/model/yclients/model";
import useMediaQuery from "@/lib/hooks/use-media-query";
import CurrentSelectedDesktop from "@/components/booking/booking-form/current-selected-desktop";
import CurrentSelectedMobile from "@/components/booking/booking-form/current-selected-mobile";
import {FinalizeForm} from "@/components/booking/booking-form/finalize-form";
import {getAllAvailableServices, getNearestAvailableSeances} from "../../../data/queries/yclients/service";

interface IBookingFormProps {
  data: IYBasicData;
}

const BookingForm = memo<IBookingFormProps>(({
                                               data
                                             }) => {
  const {isMobile} = useMediaQuery();
  const [tabIndex, setTabIndex] = useState(0);
  const [isFinalize, setFinalize] = useState(false);

  const tabClassname = "bg-c-bg-dark rounded-[50px] h-[48px] grid place-content-center";
  const tabDisabledClassname = "opacity-[0.4]";
  const tabActiveClassname = "bg-c-primary-darken border-b-c-primary border-b-[3px]";
  const panelClassName = "w-full h-full p-4 overflow-y-auto overflow-x-hidden";

  const [currentDates, setCurrentDates] = useState<IYNearestSeancesResponse | null>(null);

  const [selectedMaster, setSelectedMaster] = useState<number | null>(null);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    if (!selectedMaster || !data) return;
    const fetchData = async () => {
      data.services = await getAllAvailableServices({
        staff_id: selectedMaster.toString()
      })
    }

    fetchData();
  }, [selectedMaster, data])

  useEffect(() => {
    if (!selectedMaster || !data) return;
    const fetchData = async () => {
      setCurrentDates(await getNearestAvailableSeances(selectedMaster.toString(), {
        "service_ids[]": selectedServices.toString()
      }))
    }

    fetchData();
    console.log(data.dates)
  }, [selectedMaster, selectedServices, data])

  const handleNextStep = () => tabIndex < 2
    ? setTabIndex(prev => prev + 1)
    : () => {
    };

  return (
    <div className={"h-[75vh] w-full flex flex-col justify-center gap-16"}>
      {!isFinalize
        ? <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className={"h-full"}
          selectedTabClassName={tabActiveClassname}
          selectedTabPanelClassName={panelClassName}
        >
          <TabList className={"grid grid-flow-col auto-cols-[1fr] text-center gap-4 px-4"}>
            <Tab className={tabClassname}>
              Специалисты
            </Tab>
            <Tab className={tabClassname} disabled={!selectedMaster} disabledClassName={tabDisabledClassname}>
              Услуги
            </Tab>
            <Tab className={tabClassname} disabled={!selectedMaster || !selectedServices.length}
                 disabledClassName={tabDisabledClassname}>
              Дата и время
            </Tab>
          </TabList>
          <div className={`flex justify-center ${isMobile ? "flex-col" : ""} w-full h-full`}>
            {(selectedMaster || selectedServices.length || dateTime)
              ? (isMobile
                ? <CurrentSelectedMobile
                  data={data}
                  selectedMaster={selectedMaster}
                  selectedServices={selectedServices}
                  dateTime={dateTime}
                  handleNextStep={handleNextStep}
                  setFinalize={setFinalize}
                /> : <CurrentSelectedDesktop
                  data={data}
                  selectedMaster={selectedMaster}
                  selectedServices={selectedServices}
                  dateTime={dateTime}
                  handleNextStep={handleNextStep}
                  setFinalize={setFinalize}
                />)
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
                data={data}
                currentDates={currentDates}
                dateTime={dateTime}
                setDateTime={setDateTime}
              />
            </TabPanel>
          </div>
        </Tabs>
        : <FinalizeForm
          data={data}
          setFinalize={setFinalize}
          selectedMaster={selectedMaster}
          selectedServices={selectedServices}
          dateTime={dateTime}
        />
      }
    </div>
  );
})
BookingForm.displayName = "BookingForm";

export {BookingForm};