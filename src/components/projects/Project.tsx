import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { type Project } from "../../types/projects-type";

type ProjectProps = {
  projectItem: Project;
};

const Project = ({ projectItem }: ProjectProps) => {
  return (
    <section>
      <div className="flex flex-col text-start border p-3 space-y-4 rounded-md">
        <img
          src={projectItem.logo}
          className="w-10 h-10 border rounded-full"
          alt="Jutsa logo"
        />
        <div className="space-y-1 ml-2">
          <h1 className="text-sm font-bold">{projectItem.name}</h1>
          <p className="text-xs text-gray-500">{projectItem.description}</p>
          <div className="flex items-center gap-2 pt-2">
            <FaLink className="text-blue-500" />
            <Link
              to="https://spotlight.tailwindui.com/projects"
              target="_blank"
              className="text-xs font-semibold text--500"
            >
              Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
