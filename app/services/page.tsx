import {ServiceForm} from "@/components/service-form/service-form";
import {getAllAvailableServices} from "../../data/queries/yclients/service";

export default async function Services() {
  const services = await getAllAvailableServices();

  return (
    <div className={"w-screen h-screen py-[72px] overflow-auto"}>
      <ServiceForm YCategoriesWithServices={services} />
    </div>
  );
}