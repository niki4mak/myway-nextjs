import HomePageContent from "@/components/home/home-page-content";

export default async function Main() {
  return (
      <div className={"w-screen h-screen top-0 left-0 grid place-content-center"}>
          <HomePageContent/>
      </div>
  );
}