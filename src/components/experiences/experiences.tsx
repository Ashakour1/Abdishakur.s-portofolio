import { MdBusinessCenter } from "react-icons/md";
import { ExperienceData } from "../../data/experience-data";
import Experience from "./experience";

const Experiences = () => {
  return (
    <section className="w-full lex flex-col">
      <div className="flex items-center text-center py-5 pt-10 gap-1 text-gray-600 ">
        <MdBusinessCenter className="text-xl" />
        <h1 className="font-bold text-sm">Work Experience</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {ExperienceData.map((item, index) => (
          <Experience key={index} experienceItem={item} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
