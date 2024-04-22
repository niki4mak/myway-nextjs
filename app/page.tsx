import Image from "next/image";
import ButtonTransparent from "@/components/shared/button/button-transparent";
import Link from "next/link";

export default async function Entry() {
  return (
    <div className={"w-screen h-screen top-0 left-0 grid grid-cols-2"}>
      <Link href={"/home"} className={"relative h-full w-full flex items-center justify-center"}>
        <Image
          className={"absolute h-full object-cover object-right"}
          width={954}
          height={980}
          src={"/landing/d-women.png"}
          alt="Precedent Logo"
        />
        <ButtonTransparent text={"Женское"} />
      </Link>
      <Link href={"/home"} className={"relative w-full h-full flex items-center justify-center"}>
        <Image
          className={"absolute h-full object-cover object-left z-0"}
          width={966}
          height={980}
          src={"/landing/d-man.png"}
          alt="Precedent Logo"
        />
        <ButtonTransparent text={"Мужское"} />
      </Link>
    </div>
  );
}