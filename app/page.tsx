import Image from "next/image";
import ButtonTransparent from "@/components/shared/button/button-transparent";
import Link from "next/link";

export default async function Entry() {
  return (
    <div className={"w-screen h-screen top-0 left-0 grid grid-cols-2"}>
      <Link href={"/home"} className={"relative h-full w-full flex items-center justify-center"}>
        <div className={"absolute h-full right-0"}>
          <Image
            className={"h-full w-fit object-fit object-right z-0"}
            width={1040}
            height={1960}
            src={"/landing/d-woman@2x.png"}
            alt="Precedent Logo"
          />
        </div>
        <ButtonTransparent text={"Женское"}/>
      </Link>
      <Link href={"/home"} className={"relative w-full h-full flex items-center justify-center"}>
        <div className={"absolute h-full left-0"}>
          <Image
            className={"h-full w-fit object-cover object-left z-0"}
            width={1040}
            height={1960}
            src={"/landing/d-man@2x.png"}
            alt="Precedent Logo"
          />
        </div>
        <ButtonTransparent text={"Мужское"} />
      </Link>
    </div>
  );
}