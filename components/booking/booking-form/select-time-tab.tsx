"use client";

import React, {Dispatch, memo, SetStateAction} from "react";
import {DatePicker} from "@/components/shared/date-picker/date-picker";
import {IYBasicData, IYDatesResponse, IYTimesResponse} from "../../../data/model/yclients/model";
import {parseISO} from "date-fns/parseISO";

interface ISelectTimeTabProps {
  data: IYBasicData;
  currentDates?: IYDatesResponse | null;
  currentTimes?: IYTimesResponse | null;
  dateTime: Date | null;
  setDateTime: Dispatch<SetStateAction<Date | null>>
}

const SelectTimeTab = memo<ISelectTimeTabProps>(({
                                                   data,
                                                   currentDates,
                                                   currentTimes,
                                                   dateTime,
                                                   setDateTime
                                                 }) => {
  const available = currentDates?.booking_dates.map(it =>
    parseISO(it.toString())
  );

  const availableTimes = currentTimes?.map(it =>
    parseISO(it.datetime.toString())
  );

  return (
    <div className={"w-full"}>
      <DatePicker
        dateTime={dateTime}
        setDateTime={setDateTime}
        available={available}
        availableTimes={availableTimes}
      />
    </div>
  );
})
SelectTimeTab.displayName = "SelectTimeTab"

export {SelectTimeTab};