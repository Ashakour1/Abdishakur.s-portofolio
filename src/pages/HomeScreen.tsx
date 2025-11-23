import { useEffect } from "react";

import ContactSection from "../components/ContactSection";
import Educations from "../components/educations/educations";
import Experiences from "../components/experiences/experiences";
import HeroSection from "../components/HeroSection";
import Projects from "../components/projects/ProjectsSection";
import Tools from "@/components/Tools";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);


  return (
    <div className=" max-w-[1020px] mx-auto px-5 py-10">
      <HeroSection />
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        <Experiences />
     
      </div>
         <Educations />
         <Tools/>
     
      <Projects />
      <ContactSection />
    </div>
  );
};

export default HomePage;
