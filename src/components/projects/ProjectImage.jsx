export const ProjectImage = ({ project }) => {
  return (
    <div className="mockup-window border bg-base-300 w-[25rem] h-[18rem] ">
      <img src={project.img} alt="" />
    </div>
  );
};
