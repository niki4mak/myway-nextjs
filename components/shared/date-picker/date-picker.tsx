import React, {Dispatch, memo, SetStateAction} from "react";
import ReactDatePicker, {registerLocale} from "react-datepicker";
import { ru } from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";
registerLocale('ru', ru);


interface IDatePickerProps {
  dateTime: Date | null;
  setDateTime: Dispatch<SetStateAction<Date | null>>
}

const DatePicker = memo<IDatePickerProps>(({
                                             dateTime,
                                             setDateTime
}) => {
 return (
    <ReactDatePicker
      selected={dateTime}
      onChange={(date) => setDateTime(date)}
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

export { DatePicker };