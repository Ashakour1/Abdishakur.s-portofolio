import { ExperienceData } from "../../data/experience-data";
import Experience from "./experience";

const Experiences = () => {
  return (
    <section className="w-full lex flex-col">
      <h1 className="py-5 pt-10 text-sm font-bold text-gray-700">Work Experience</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {ExperienceData.map((item, index) => (
          <Experience key={index} experienceItem={item} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
