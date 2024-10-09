import { VscGithubProject } from "react-icons/vsc";
import Project from "./Project";

const Projects = () => {
  return (
    <div>
      <div className="flex items-center text-center py-3 gap-1 text-gray-600">
        <VscGithubProject className="text-xl" />
        <h1 className="font-bold text-sm">Projects</h1>
      </div>
      <div className="gap-6">
        <Project />
      </div>
    </div>
  );
};

export default Projects;
