import Image from "next/image";

export default async function Main() {
  return (
    <div className={"w-screen h-screen top-0 left-0 grid place-content-center"}>
      <Image
        className={"absolute h-full object-cover object-right z-0"}
        width={3840}
        height={1960}
        src={"/main/bg-main@2x.png"}
        alt="Precedent Logo"
      />

      <div className={"w-full ml-[100%] flex flex-col items-center"}>
        <div className={"flex items-center font-display text-6xl justify-center"}>MY WAY</div>
        <div className={"text-center"}>Стандарты высоко качества - то, чем мы <br/>руководствуемся</div>
      </div>
    </div>
  );
}