import AboutUs from "./components/AboutUsSection";
import Activities from "./components/ActivitiesSection";
import Hero from "./components/Hero/HeroSection";
import SocialMedia from "./components/SocialMediaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Activities />
      <AboutUs />
      <SocialMedia />
    </>
  );
}
