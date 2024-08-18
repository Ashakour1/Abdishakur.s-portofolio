import Footer from "../components/Footer";
import Experiences from "../components/ui/experiences/experiences";
import HeroSection from "../components/ui/hero-section";

const HomePage = () => {
  return (
    <div className="max-w-[1020px] mx-auto px-5">
      <HeroSection />
      <Experiences />
      <Footer />
    </div>
  );
};

export default HomePage;
