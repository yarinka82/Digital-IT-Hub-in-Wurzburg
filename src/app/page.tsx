import AboutUs from "./components/AboutUsSection";
import Activities from "./components/ActivitiesSection";
import Hero from "./components/HeroSection";
import Partners from "./components/PartnersSection";
import SocialMedia from "./components/SocialMediaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialMedia />
      <Activities />
      <AboutUs />
      <Partners />
    </>
  );
}
