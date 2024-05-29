import YandexMap from "@/components/about/yandex-map";
import {AboutContent} from "@/components/about/about-content";

export default async function About() {
  return (
    <div className={"relative w-screen top-0 left-0 flex flex-col gap-8 pb-[90px] items-center"}>
      <AboutContent/>

      <YandexMap/>
    </div>
  );
}