import { AboutBody, Photo, SectionTitle } from "../components";
import { ABOUT_CONTENT as CONTENT } from "../constants";

export const About = () => {
  return (
    <div className="pt-20 h-full bg-[#000814] text-[#61A5C2]" id="about">
      <div className="container mx-auto text-lg w-3/4 flex flex-wrap">
        <SectionTitle CONTENT={CONTENT} />
        <AboutBody CONTENT={CONTENT} />
        <Photo />
      </div>
    </div>
  );
};
