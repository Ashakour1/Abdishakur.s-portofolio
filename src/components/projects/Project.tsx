import { FaLink, FaReact } from "react-icons/fa6";
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
          className="w-10 object-contain h-10 border rounded-full"
          alt="Jutsa logo"
        />
        <div className="space-y-1 ml-2">
          <h1 className="text-sm font-bold">{projectItem.name}</h1>
          <p className="text-xs text-gray-500">{projectItem.description}</p>
          <div className="flex justify-between items-center gap-2 pt-5">
            <span className="inline-flex items-center justify-center rounded-full  px-2.5 py-0.5 text-emerald-700">
              <FaReact className="text-blue-600 -ms-1 me-1.5 size-4" />
              <p className="whitespace-nowrap   text-sm">React</p>
            </span>
            <div>
              <Link
                to={`/project`}
                className="flex items-center gap-1 text-xs text-blue-500"
              >
                <FaLink className="text-xs" />
                <span>View project</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
