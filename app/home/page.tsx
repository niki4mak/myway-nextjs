import YandexMap from "@/components/about/yandex-map";
import HomePageConcept from "@/components/home/home-concept";
import HomePageContent from "@/components/home/home-page-content";
import Footer from "@/components/layout/footer";

export default async function Main() {
  return (
      <div className={"w-screen flex flex-col items-center"}>
          <HomePageContent/>
          <HomePageConcept/>
          <YandexMap/>
          <Footer/>
      </div>
      
  );
  
}