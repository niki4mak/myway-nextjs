import {ServiceForm} from "@/components/service-form/service-form";

export default async function Services() {
  return (
    <div className={"w-screen h-screen top-0 left-0 grid place-content-center"}>
      <ServiceForm />
    </div>
  );
}