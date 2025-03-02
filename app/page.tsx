import Image from "next/image";
import ButtonTransparent from "@/components/shared/button/button-transparent";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Entry() {
  // return (
  //   <div className={"w-screen h-screen top-0 left-0 grid grid-cols-2"}>
  //     <Link href={"/home"} className={"relative h-full w-full flex items-center justify-center transition-all bg-black hover:bg-transparent"}>
  //       <div className={"absolute h-full right-0 flex flex-col justify-end"}>
  //         <Image
  //           className={"h-[80%] w-fit object-cover object-right z-0"}
  //           width={1040}
  //           height={1960}
  //           src={"/landing/d-woman@2x.png"}
  //           alt="Precedent Logo"
  //         />
  //       </div>
  //       <ButtonTransparent text={"Женское"}/>
  //     </Link>
  //     <Link href={"/home"} className={"relative w-full h-full flex items-center justify-center transition-all bg-black hover:bg-transparent"}>
  //       <div className={"absolute h-full left-0 flex flex-col justify-end"}>
  //         <Image
  //           className={"h-[80%] w-fit object-cover object-left z-0"}
  //           width={1040}
  //           height={1960}
  //           src={"/landing/d-man@2x.png"}
  //           alt="Precedent Logo"
  //         />
  //       </div>
  //       <ButtonTransparent text={"Мужское"} />
  //     </Link>
  //   </div>
  // );
  redirect("/home");
  
}