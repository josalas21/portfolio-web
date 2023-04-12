import { ProjectTech } from "./ProjectTech";

export const ProjectTechs = ({ project }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {project.techs.map((tech) => (
        <ProjectTech tech={tech} key={tech.name} />
      ))}
    </div>
  );
};
