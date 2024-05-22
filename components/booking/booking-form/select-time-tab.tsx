"use client";

import React, {Dispatch, memo, SetStateAction} from "react";
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
    <div className={"w-full"}>
      <DatePicker dateTime={dateTime} setDateTime={setDateTime}/>
    </div>
  );
})
SelectTimeTab.displayName = "SelectTimeTab"

export {SelectTimeTab};