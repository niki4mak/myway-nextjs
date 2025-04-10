import {ServiceForm} from "@/components/service-form/service-form";
import {getAllAvailableServices} from "../../data/queries/yclients/service";
import ServicesAndPrices from "@/components/service-form/services-and-prices";

export default async function Services() {
  const services = await getAllAvailableServices();

  return (
    <div className={"w-screen h-screen py-[10px] overflow-auto"}>
      {/* <ServiceForm YCategoriesWithServices={services}/> */}
      <ServicesAndPrices />
    </div>
  );
}