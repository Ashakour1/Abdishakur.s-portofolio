import { MdBusinessCenter } from "react-icons/md";
import { EducationsData } from "../../data/educations-data";
import Education from "./education";

const Educations = () => {
  return (
    <section className="w-full  h-full">
      <div className="flex items-center text-center py-5 gap-1 text-gray-600 ">
        <MdBusinessCenter className="text-xl" />
        <h1 className="font-bold text-sm">Education</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {EducationsData.map((item, index) => (
          <Education key={index} educationItem={item} />
        ))}
      </div>
    </section>
  );
};

export default Educations;
