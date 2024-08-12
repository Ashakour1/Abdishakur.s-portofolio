import Experiences from "../components/ui/experience/experiences";
import HeroSection from "../components/ui/hero-section";

const HomePage = () => {
  return (
    <div className="max-w-[1020px] mx-auto px-5">
      <HeroSection />
      <Experiences />
    </div>
  );
};

export default HomePage;
