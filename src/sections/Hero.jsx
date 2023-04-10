import { HeroBody, HeroButtons } from "../components";
import { HERO_CONTENT as CONTENT } from "../constants";

export const Hero = () => {
  return (
    <div className="pt-[8rem] h-full bg-[#000814] text-[#61A5C2] md:pt-[5rem] ">
      <div className="container mx-auto text-lg w-3/4 flex flex-col flex-wrap md:p-8 ">
        <HeroBody CONTENT={CONTENT} />
        <HeroButtons />
      </div>
    </div>
  );
};
