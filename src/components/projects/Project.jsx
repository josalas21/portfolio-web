import { ProjectContent } from "./ProjectContent";
import { ProjectImage } from "./ProjectImage";

export const Project = ({ project }) => {
  return (
    <div className="w-full flex flex-wrap my-6 md:my-12 justify-evenly gap-y-4">
      <ProjectContent project={project} />
      <ProjectImage project={project} />
    </div>
  );
};
