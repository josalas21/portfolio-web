export const ProjectBody = ({ project }) => {
  return (
    <p className="font-light border border-[#00FFBF] self-center p-4">
      {project.description}
    </p>
  );
};
