"use client";

import React, {memo, useState} from "react";
import ReactDatePicker from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {PersonCard} from "@/components/shared/person-card/person-card";
import ButtonSolid from "@/components/shared/button/button-solid";
import { registerLocale } from  "react-datepicker";
import { ru } from 'date-fns/locale/ru';
registerLocale('ru', ru)

interface ISelectTimeTabProps {
  
}

const SelectTimeTab = memo<ISelectTimeTabProps>(({

}) => {
  const [dateTime, setDateTime] = useState<Date | null>(null);

  const renderDayContents = (day: number, date: Date | undefined) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return <div className={"text-l"} title={tooltipText}>{day}</div>;
  };

  return (
    <div className={"grid grid-cols-[1fr_3fr] gap-4"}>
      <div className={"flex flex-col gap-4 justify-between"}>
        <PersonCard/>
        <ButtonSolid text={"Выбрать услугу"}/>
      </div>
      <div>
        <ReactDatePicker
          selected={dateTime}
          onChange={(date) => setDateTime(date)}
          showTimeSelect
          inline
          locale={"ru"}
          timeFormat="HH:mm"
          timeIntervals={60}
          renderDayContents={renderDayContents}
        />
      </div>
    </div>
)
  ;
})
SelectTimeTab.displayName = "SelectTimeTab"

export {SelectTimeTab};