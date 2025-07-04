import { useEffect } from "react";
import Educations from "../components/educations/educations";
import Experiences from "../components/experiences/experiences";
import HeroSection from "../components/HeroSection";
import Projects from "../components/projects/ProjectsSection";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className=" max-w-[1020px] mx-auto px-5">
      <HeroSection />
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        <Experiences />
        <Educations />
      </div>
      <Projects />
    </div>
  );
};

export default HomePage;
