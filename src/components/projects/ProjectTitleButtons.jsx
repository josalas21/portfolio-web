import github from "../../assets/svgs/github.svg";
import external_link from "../../assets/svgs/external_link.svg";

export const ProjectTitleButtons = ({ project }) => {
  return (
    <div className="flex items-center gap-4">
      <a
        className="hover:scale-125 text-[#00FFBF]"
        href={project.github}
        target="_blank"
      >
        <img src={github} alt="github" height={20} width={20} />
      </a>

      <a
        className="hover:scale-125 text-[#00FFBF]"
        href={project.link}
        target="_blank"
      >
        <img src={external_link} alt="external link" height={20} width={20} />
      </a>
    </div>
  );
};
