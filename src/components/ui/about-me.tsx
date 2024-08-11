import { MdOutlinePerson } from "react-icons/md";

const AboutMe = () => {
  return (
    <div className="flex items-center text-center mb-2 gap-1 text-gray-600">
      <MdOutlinePerson className="text-xl" />
      <p className=" font-bold text-sm">About Me</p>
    </div>
  );
};

export default AboutMe;
