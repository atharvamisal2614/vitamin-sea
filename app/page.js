import CardsSection from "./Components/CardSection";
import Footer from "./Components/Footer";
// import CoupleCottage from "./Components/Rooms";

import HeroSection from "./Components/HeroSection";
import IntroSection from "./Components/IntroSection";
import DiscoverDapoli from "./Components/Places";
import ResortAmeneties from "./Components/ResortAmeneties";
import Room from "./Components/Rooms";

export default function Home() {
  return (
    <>
   <HeroSection />
   <IntroSection />
   <CardsSection/>
   <Room />
   <ResortAmeneties/>
   <DiscoverDapoli/>
   <Footer/>
   {/* <CoupleCottage /> */}
   </>
  );
}
