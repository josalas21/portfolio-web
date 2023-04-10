import { ProjectTitleButtons } from "./ProjectTitleButtons";

export const ProjectTitle = ({ project }) => {
  return (
    <h3 className="w-full flex justify-between text-2xl items-center text-[#A9D6E5]">
      {project.title}
      <ProjectTitleButtons project={project} />
    </h3>
  );
};
