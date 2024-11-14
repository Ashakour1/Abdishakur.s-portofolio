import { AiFillProject } from "react-icons/ai";
import Project from "./Project";
import { ProjectsData } from "../../data/projects-data";

const Projects = () => {
  return (
    <div>
      <div className="flex items-center text-center py-5 gap-1 text-gray-600">
        <AiFillProject className="text-xl" />
        <h1 className="font-bold text-sm">Projects</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap- gap-4">
        {ProjectsData.map((project, index) => (
          <Project key={index} projectItem={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
