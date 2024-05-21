import {BookingForm} from "@/components/booking/booking-form/booking-form";
import {categoriesWithServicesAndPrices} from "../../data/queries/prisma/service";
import {
  getAllAvailableDates,
  getAllAvailableMasters,
  getAllAvailableServices,
  getAllAvailableServicesCategories
} from "../../data/queries/yclients/service";
import {IYBasicData} from "../../data/model/yclients/model";

export default async function Booking() {
  const data = await categoriesWithServicesAndPrices();

  const y_data: IYBasicData = {
    services: await getAllAvailableServices(),
    masters: await getAllAvailableMasters(),
    dates: await getAllAvailableDates(),
  }

  return (
    <BookingForm data={y_data} />
  );
}