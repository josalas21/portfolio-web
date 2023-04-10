import github from "../../assets/svgs/github.svg";
import linkedin from "../../assets/svgs/linkedin.svg";
import { IconButton } from "../common/IconButton";

export const HeroButtons = () => {
  return (
    <div className="flex gap-8">
      <IconButton
        src={github}
        alt="github"
        h={40}
        w={40}
        target="_blank"
        href="https://github.com/josalas21"
      />
      <IconButton
        src={linkedin}
        alt="linkedin"
        h={40}
        w={40}
        target="_blank"
        href="https://linkedin.com/in/josuesalasdev"
      />
    </div>
  );
};

{
  /* <a className="text-[#00FFBF] hover:scale-125" href="">
        <img src={github} alt="github" height={40} width={40} />
      </a>
      <a className="text-[#00FFBF] hover:scale-125" href="">
        <img src={linkedin} alt="github" height={40} width={40} />
      </a> */
}
