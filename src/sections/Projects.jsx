import { ProjectsList, SectionTitle } from "../components/index.js";
import { PROJECTS_CONTENT as CONTENT } from "../constants.js";

export const Projects = () => {
  return (
    <div className="h-full bg-[#000814] text-[#61A5C2]  pt-20 " id="proyects">
      <div className="flex container flex-wrap mx-auto w-3/4">
        <div className="w-full md:p-8 h-full flex flex-wrap ">
          <SectionTitle CONTENT={CONTENT.title} />
          <ProjectsList CONTENT={CONTENT.projects} />
        </div>
      </div>
    </div>
  );
};
