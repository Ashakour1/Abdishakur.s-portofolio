import Footer from "../components/Footer";
import Experiences from "../components/experiences/experiences";
import HeroSection from "../components/HeroSection";
import Projects from "../components/projects/ProjectsSection";

const HomePage = () => {
  return (
    <div className="max-w-[1020px] mx-auto px-5">
      <HeroSection />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;
