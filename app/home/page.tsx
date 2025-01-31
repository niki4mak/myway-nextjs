import HomePageConcept from "@/components/home/home-concept";
import HomePageContent from "@/components/home/home-page-content";

export default async function Main() {
  return (
      <div className={"w-screen flex flex-col items-center"}>
          <HomePageContent/>
          <HomePageConcept/>
      </div>
  );
}