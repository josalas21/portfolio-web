import { ProjectTech } from "./ProjectTech";

export const ProjectTechs = ({ project }) => {
  return (
    <>
      {project.techs.map((tech) => (
        <ProjectTech tech={tech} />
      ))}
    </>
  );
};
