import Image from "next/image";
import BackgroundImage from "@/components/home/background-image";

export default async function Main() {
  return (
    <div className={"w-screen h-screen top-0 left-0 grid place-content-center"}>
      <BackgroundImage />
    </div>
  );
}