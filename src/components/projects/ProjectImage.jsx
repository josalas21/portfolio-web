export const ProjectImage = ({ project }) => {
  return (
    <div className="mockup-window border bg-base-300 w-[18rem] md:w-[25rem] h-[12rem] md:h-[18rem] ">
      <img src={project.img} alt="Project image" />
    </div>
  );
};
