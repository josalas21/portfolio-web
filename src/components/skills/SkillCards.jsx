import { SkillCard } from "./SkillCard";

export const SkillCards = ({ CONTENT }) => {
  return (
    <div className="flex flex-wrap gap-8 w-full justify-center mt-8 md:mt-0">
      {CONTENT.map((skill) => (
        <SkillCard skill={skill} key={skill.title} />
      ))}
    </div>
  );
};
