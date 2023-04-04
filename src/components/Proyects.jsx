import { ExternalLinkSvg, GithubSvg, LinkedinSvg } from "../assets/index.js";
import { PROYECTS } from "../constants.js";

function Proyects() {
  return (
    <div className="flex container flex-wrap mx-auto w-3/4 mt-[10rem]">
      <div className="w-full p-8 h-[30rem] flex flex-wrap ">
        <h2 className="w-full font-black text-3xl mb-8">03. Proyects</h2>
        {PROYECTS.map((proyect) => (
          <div className="w-full flex flex-wrap my-24 justify-evenly gap-y-4">
            <div className="w-[25rem] h-[20rem] flex flex-wrap">
              <h3 className="w-full text-3xl font-bold">{proyect.title}</h3>
              <p className="font-light border self-center p-4">
                {proyect.description}
              </p>
              {proyect.techs.map((tech) => (
                <span className="text-sm w-1/3 h-[2rem] text-center self-center ">
                  {tech}
                </span>
              ))}
              <div className="w-full flex justify-center items-center gap-4 scale-75 ">
                <button className="btn btn-square btn-outline">
                  <GithubSvg />
                </button>
                <button className="btn btn-square btn-outline">
                  <ExternalLinkSvg />
                </button>
              </div>
            </div>

            <div className="mockup-window border bg-base-300 w-[25rem] h-[20rem] ">
              <div className="flex justify-center px-4 py-16">Hello!</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyects;
