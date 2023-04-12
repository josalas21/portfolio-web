export const ProjectTech = ({ tech }) => {
  return (
    <span className="flex gap-1 text-xs md:w-[7rem] w-[5rem] text-center items-center self-center text-[#A9D6E5]">
      <img src={tech.img} className="w-4 h-4 md:w-8" alt={tech.name} />
      {tech.name}
    </span>
  );
};
