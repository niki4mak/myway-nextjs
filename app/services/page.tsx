import {ServiceForm} from "@/components/service-form/service-form";
import {categoriesWithServicesAndPrices} from "../../data/queries/prisma/service";

export default async function Services() {
  const data = await categoriesWithServicesAndPrices();

  return (
    <div className={"w-screen h-screen pt-[72px] px-[260px]"}>
      <ServiceForm categoriesWithServices={data} />
    </div>
  );
}