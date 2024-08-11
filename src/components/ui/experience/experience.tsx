import React from "react";
import { type Experience } from "../../../types/experiences-type";
import { MdBusinessCenter } from "react-icons/md";

type ExperienceProps = {
  experienceItem: Experience;
};

const Experience = ({ experienceItem }: ExperienceProps) => {
  console.log(experienceItem.logo);
  return (
    <section>
      <div className="flex flex-col border-[1.5px] px-2 py-2 rounded-md">
        <div className="flex items-center gap-1 py-2">
          <img src={experienceItem.logo} className="w-12 rounded-full" alt="" />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold">{experienceItem.position}</h1>
            <p className="text-xs text-gray-500">{experienceItem.name}</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 ">{experienceItem.time}</p>
      </div>
    </section>
  );
};

export default Experience;
