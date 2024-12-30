import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { type Education } from "../../types/educations-type";

type EducationProps = {
  educationItem: Education;
};

const Education = ({ educationItem }: EducationProps) => {
  return (
    <section className="flex flex-col border space-y-1  px-3 py-3  rounded-md">
      <div className="flex flex-col">
        <h3 className="text-base font-bold">{educationItem.institution}</h3>
        <div className="flex items-center gap-2 mt-2 text-muted-foreground">
          <span className="flex text-xs text-gray-600 items-center gap-1">
            <IoCalendarOutline className="w-4 h-4" />
            {educationItem.date}
          </span>
          <span className="flex items-center text-xs text-gray-600 gap-1">
            <IoLocationOutline className="w-4 h-4" />
            {educationItem.location}
          </span>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          {educationItem.description}
        </p>
      </div>
    </section>
  );
};

export default Education;
