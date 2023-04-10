import { Project } from "./Project";

export const ProjectsList = ({ CONTENT }) => {
  return (
    <>
      {CONTENT.map((project) => (
        <Project project={project} />
      ))}
    </>
  );
};
