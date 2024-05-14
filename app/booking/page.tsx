import {BookingForm} from "@/components/booking/booking-form/booking-form";
import {categoriesWithServicesAndPrices} from "../../data/queries/service";

export default async function Booking() {
  const data = await categoriesWithServicesAndPrices();

  return (
    <BookingForm categoriesWithServices={data} />
  );
}