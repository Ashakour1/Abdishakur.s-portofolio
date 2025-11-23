import { EducationsData } from "../../data/educations-data";
import Education from "./education";

const Educations = () => {
  return (
    <section className="w-full  h-full">
      <h1 className="py-5 pt-10 text-sm font-bold text-gray-700">Education</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {EducationsData.map((item, index) => (
          <Education key={index} educationItem={item} />
        ))}
      </div>
    </section>
  );
};

export default Educations;
