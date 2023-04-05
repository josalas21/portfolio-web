import { ExternalLinkSvg, GithubSvg, LinkedinSvg } from "../assets/index.js";
import { PROYECTS } from "../constants.js";

function Proyects() {
  return (
    <div className="h-[100rem] bg-[#000814] text-[#61A5C2] ">
      <div className="flex container flex-wrap mx-auto w-3/4">
        <div className="w-full p-8 h-[30rem] flex flex-wrap ">
          <h2 className="w-full font-bold text-3xl mb-8 text-[#A9D6E5]">
            <span className="text-[#00FFBF] font-light">03.</span> Proyects
          </h2>
          {PROYECTS.map((proyect) => (
            <div className="w-full flex flex-wrap my-24 justify-evenly gap-y-4">
              <div className="w-[25rem] h-[20rem] flex flex-wrap">
                <h3 className="w-full text-3xl text-[#A9D6E5]">
                  {proyect.title}
                </h3>
                <p className="font-light border border-[#00FFBF] self-center p-4">
                  {proyect.description}
                </p>
                {proyect.techs.map((tech) => (
                  <span className="text-xs w-1/3 text-center self-center text-[#A9D6E5]">
                    {tech}
                  </span>
                ))}
                <div className="w-full flex justify-center items-center gap-4">
                  <a
                    className="hover:scale-125 text-[#00FFBF]"
                    href={proyect.github}
                    target="_blank"
                  >
                    <GithubSvg />
                  </a>

                  <a
                    className="hover:scale-125 text-[#00FFBF]"
                    href={proyect.github}
                    target="_blank"
                  >
                    <ExternalLinkSvg />
                  </a>
                </div>
              </div>

              <div className="mockup-window border bg-base-300 w-[25rem] h-[20rem] ">
                <div className="flex justify-center px-4 py-16">Hello!</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Proyects;
