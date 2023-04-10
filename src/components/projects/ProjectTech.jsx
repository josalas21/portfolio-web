export const ProjectTech = ({ tech }) => {
  return (
    <span className="flex gap-2 text-xs w-1/3 text-center items-center self-center text-[#A9D6E5]">
      <img src={tech.img} height={20} width={20} alt={tech.name} />
      {tech.name}
    </span>
  );
};
