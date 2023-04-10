import { ProjectBody } from "./ProjectBody";
import { ProjectTechs } from "./ProjectTechs";
import { ProjectTitle } from "./ProjectTitle";

export const ProjectContent = ({ project }) => {
  return (
    <div className="w-[25rem] h-[20rem] flex flex-wrap">
      <ProjectTitle project={project} />
      <ProjectBody project={project} />
      <ProjectTechs project={project} />
    </div>
  );
};
