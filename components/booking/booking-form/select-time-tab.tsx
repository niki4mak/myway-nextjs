"use client";

import React, {Dispatch, memo, SetStateAction, useState} from "react";
import {PersonCard} from "@/components/shared/person-card/person-card";
import ButtonSolid from "@/components/shared/button/button-solid";
import {DatePicker} from "@/components/shared/date-picker/date-picker";

interface ISelectTimeTabProps {
  dateTime: Date | null;
  setDateTime: Dispatch<SetStateAction<Date | null>>
}

const SelectTimeTab = memo<ISelectTimeTabProps>(({
  dateTime,
  setDateTime
}) => {

  return (
    <div className={"grid grid-cols-[1fr_3fr] gap-4"}>
      <div className={"flex flex-col gap-4 justify-between"}>
        <PersonCard/>
        <ButtonSolid text={"Выбрать услугу"}/>
      </div>
      <DatePicker dateTime={dateTime} setDateTime={setDateTime} />
    </div>
)
  ;
})
SelectTimeTab.displayName = "SelectTimeTab"

export {SelectTimeTab};