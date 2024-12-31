import { IoPerson } from "react-icons/io5";

const AboutMe = () => {
  return (
    <div className="flex items-center text-center mb-2 gap-1 text-gray-600">
      <IoPerson className="text-xl" />
      <p className=" font-bold text-sm">About Me</p>
    </div>
  );
};

export default AboutMe;
