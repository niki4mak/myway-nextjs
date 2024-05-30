"use client";

import React, {Dispatch, memo, SetStateAction} from "react";
import {DatePicker} from "@/components/shared/date-picker/date-picker";
import {IYBasicData, IYNearestSeancesResponse} from "../../../data/model/yclients/model";
import {parseISO} from "date-fns/parseISO";

interface ISelectTimeTabProps {
  data: IYBasicData;
  currentDates?: IYNearestSeancesResponse | null;
  dateTime: Date | null;
  setDateTime: Dispatch<SetStateAction<Date | null>>
}

const SelectTimeTab = memo<ISelectTimeTabProps>(({
                                                   data,
                                                   currentDates,
                                                   dateTime,
                                                   setDateTime
                                                 }) => {
  const available = currentDates?.seances.map(it =>
    parseISO(it.datetime)
  );
  console.log(available);

  return (
    <div className={"w-full"}>
      <DatePicker dateTime={dateTime} setDateTime={setDateTime} available={available}/>
    </div>
  );
})
SelectTimeTab.displayName = "SelectTimeTab"

export {SelectTimeTab};