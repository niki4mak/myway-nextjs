import YandexMap from "@/components/about/yandex-map";
import Image from "next/image";

export default async function About() {
  return (
    <div className={"relative w-screen h-screen top-0 left-0 flex flex-col gap-8 py-[90px] items-center"}>
      <div className={"flex w-full items-center justify-center h-[90%]"}>
        <p className={"w-1/2 z-10"}>
          В самом сердце города расположился уютный и стильный Барбершоп MyWay, ставший настоящим убежищем для
          ценителей классического стиля и качественного сервиса. Здесь каждый клиент погружается в атмосферу настоящего
          джентльменского клуба, где звучит джазовая музыка, а аромат свежевыжатого кофе наполняет воздух.
          Профессиональные мастера-барберы владеют искусством стрижки и бритья до мельчайших деталей, создавая
          неповторимые образы, сочетающие в себе элегантность и современные тенденции. Каждый посетитель MyWay уходит
          отсюда не только с прекрасной стрижкой, но и с непередаваемым чувством уверенности и удовлетворения.
        </p>

        <div className={"absolute w-full h-fit flex"}>
          <Image className={"w-1/2"} src={"/about/about-bg-1.png"} alt={"Background"} width={1920} height={1698}/>
          <Image className={"w-1/2"} src={"/about/about-bg-1.png"} alt={"Background"} width={1920} height={1698}/>
        </div>
      </div>

      <YandexMap/>
    </div>
  );
}