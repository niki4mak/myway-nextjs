import YandexMap from "@/components/about/yandex-map";

export default async function About() {
  return (
      <div className={"w-screen h-screen top-0 left-0 grid place-content-center"}>
        <YandexMap />
      </div>
  );
}