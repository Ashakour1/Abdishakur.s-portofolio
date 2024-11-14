import { type Experience } from "../../types/experiences-type";
import { IoCalendarOutline } from "react-icons/io5";

type ExperienceProps = {
  experienceItem: Experience;
};

const Experience = ({ experienceItem }: ExperienceProps) => {
  console.log(experienceItem.logo);
  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-indigo-200",
  ];

  return (
    <section>
      <div className="flex flex-col border  px-3 py-2  rounded-md">
        <div className="flex flex-col  space-y-1">
          <div className="flex items-center gap-1 py-1">
            <img
              src={experienceItem.logo}
              className="w-12 rounded-full"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="text-sm font-bold">{experienceItem.position}</h1>
              <p className="text-xs text-gray-500">{experienceItem.name}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 flex items-center gap-1 ">
            <IoCalendarOutline className="text-xs" />
            {experienceItem.time}
          </p>
          <p className="text-xs text-gray-500 max-w-3xl">
            {experienceItem.description}
          </p>
          <div className="flex gap-2 pt-2">
            {experienceItem.technologies.map((tech, index) => (
              <span
                key={index}
                className={`text-xs px-2 py-1 rounded-md ${
                  colors[index % colors.length]
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2 pt-2">
            {experienceItem.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-40 h-20   rounded-md"
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
