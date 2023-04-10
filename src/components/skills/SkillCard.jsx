import { Skill } from "./Skill";

export const SkillCard = ({ skill }) => {
  return (
    <div className="flex flex-col gap-4 w-80 p-8 border border-[#A9D6E5]">
      <h3 className="text-[#00FFBF] text-center mb-4">{skill.title}</h3>
      {skill.techs.map((tech) => (
        <Skill tech={tech} />
      ))}
    </div>
  );
};
