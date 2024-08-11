import React from "react";
import Experience from "../experience/experience";
import { ExperienceData } from "../../../data/experience-data";
import { MdBusinessCenter } from "react-icons/md";

const Experiences = () => {
  return (
    <section>
      <div className="flex items-center text-center py-3 gap-1 text-gray-600">
        <MdBusinessCenter className="text-xl" />
        <h1 className="font-bold text-sm">Experience</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {ExperienceData.map((item, index) => (
          <Experience key={index} experienceItem={item} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
