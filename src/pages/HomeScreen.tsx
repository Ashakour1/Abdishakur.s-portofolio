import Footer from "../components/Footer";
import Experiences from "../components/experiences/experiences";
import HeroSection from "../components/HeroSection";
import Projects from "../components/projects/ProjectsSection";
import Educations from "../components/educations/educations";

const HomePage = () => {
  return (
    <div className="max-w-[1020px] mx-auto px-5">
      <HeroSection />
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        <Experiences />
        <Educations />
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;
