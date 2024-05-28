import BackgroundImage from "@/components/home/background-image";

export default async function Main() {
  return (
    <div className={"w-screen h-screen top-0 left-0 grid place-content-center"}>
      <BackgroundImage />

        <div className={"w-full ml-[100%] flex flex-col items-center"}>
            <div className={"flex items-center font-display text-6xl justify-center"}>MY WAY</div>
            <div className={"text-center"}>Стандарты высоко качества - то, чем мы <br/>руководствуемся</div>
        </div>
    </div>
  );
}