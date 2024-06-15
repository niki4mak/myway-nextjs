import React, {Dispatch, memo, SetStateAction} from "react";
import ReactDatePicker, {registerLocale} from "react-datepicker";
import {ru} from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";
import {getISODate} from "@/lib/utils";

registerLocale('ru', ru);


interface IDatePickerProps {
  dateTime: Date | null;
  setDateTime: Dispatch<SetStateAction<Date | null>>;
  available?: Date[];
  availableTimes?: Date[];
}

const DatePicker = memo<IDatePickerProps>(({
                                             dateTime,
                                             setDateTime,
                                             available,
                                             availableTimes
                                           }) => {
  const filterDates = (date: Date) => {
    return !!available?.find(it => {
      return getISODate(date) === getISODate(it)
    })
  }

  const filterTimes = (date: Date) => {
    return !!availableTimes?.find(it => it.getTime() === date.getTime())
  }

  return (
    <ReactDatePicker
      selected={dateTime}
      onChange={(date) => setDateTime(date)}
      minDate={new Date(Date.now())}
      filterDate={filterDates}
      filterTime={filterTimes}
      showTimeSelect
      inline
      locale={"ru"}
      timeFormat="HH:mm"
      timeIntervals={60}
      timeCaption={"Время"}
      dayClassName={d => "w-[32px]"}
    />
  );
})
DatePicker.displayName = "DatePicker"

export {DatePicker};