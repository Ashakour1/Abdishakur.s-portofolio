import {
  FaCcStripe,
  FaDatabase,
  FaJava,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { type Experience } from "../../types/experiences-type";
import { IoCalendarOutline, IoLogoJavascript, IoPrism } from "react-icons/io5";
import { TbBrandSupabase, TbBrandTypescript } from "react-icons/tb";
import { BiLogoMongodb, BiLogoPhp } from "react-icons/bi";
import { RiNextjsFill, RiSvelteFill } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import { IoIosMore } from "react-icons/io";
import { SiPostgresql } from "react-icons/si";

type ExperienceProps = {
  experienceItem: Experience;
};

const Experience = ({ experienceItem }: ExperienceProps) => {
  console.log(experienceItem.logo);

  const getStack = (stack: string) => {
    switch (stack) {
      case "Postgresql":
        return <SiPostgresql className="w-5 h-5" />;
      case "More":
        return <IoIosMore className="w-5 h-5" />;
      case "SAD":
        return <GrAnalytics className="w-5 h-5" />;
      case "Prisma":
        return <IoPrism className="w-5 h-5" />;
      case "Javascript":
        return <IoLogoJavascript className="w-5 h-5" />;
      case "Mysql":
        return <FaDatabase className="w-5 h-5" />;
      case "Php":
        return <BiLogoPhp className="w-5 h-5" />;
      case "Stripe":
        return <FaCcStripe className="w-5 h-5" />;
      case "TypeScript":
        return <TbBrandTypescript className="w-5 h-5" />;
      case "supabase":
        return <TbBrandSupabase className="w-5 h-5" />;
      case "MongoDb":
        return <BiLogoMongodb className="w-5 h-5" />;
      case "Svelte":
        return <RiSvelteFill className="w-5 h-5" />;
      case "React":
        return <FaReact className="w-5 h-5" />;
      case "Next.js":
        return <RiNextjsFill className="w-5 h-5" />;
      case "Node.js":
        return <FaNode className="w-5 h-5" />;
      case "Python":
        return <FaPython className="w-5 h-5" />;
      case "Java":
        return <FaJava className="w-5 h-5" />;
      case "Database":
        return <FaDatabase className="w-5 h-5" />;
      default:
        return null;
    }
  };
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
              <p className="text-xs text-gray-500 max-w-56">
                {experienceItem.name}
              </p>
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
              <span key={index} className={`text-xs px-2 py-1 rounded-md`}>
                {getStack(tech)}
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
