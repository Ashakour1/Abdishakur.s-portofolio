import React from "react";
import HeroSection from "../components/ui/hero-section";
import Experience from "../components/ui/experience/experience";
import Experiences from "../components/ui/experience/experiences";

const HomePage = () => {
  return (
    <div className="max-w-[1020px] mx-auto px-5">
      <HeroSection />
      <Experiences />
    </div>
  );
};

export default HomePage;
