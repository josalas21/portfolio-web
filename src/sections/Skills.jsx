import { SectionTitle, SkillCards, SkillsBody } from "../components";
import { SKILLS_CONTENT as CONTENT } from "../constants";

export const Skills = () => {
  return (
    <div
      className="md:min-h-screen h-full bg-[#000814] text-[#61A5C2] pt-5 md:pt-20"
      id="skills"
    >
      <div className="flex container flex-wrap mx-auto w-3/4 text-lg">
        <SectionTitle CONTENT={CONTENT.title} />
        <SkillsBody CONTENT={CONTENT.body} />
        <SkillCards CONTENT={CONTENT.cards} />
      </div>
    </div>
  );
};
