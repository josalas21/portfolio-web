import {
  CssSvg,
  GitSvg,
  HtmlSvg,
  JsSvg,
  NextSvg,
  ReactSvg,
  TailwindSvg,
} from "../assets";

function Skills() {
  return (
    <div className="flex container flex-wrap mx-auto w-3/4 mt-[10rem]">
      <div className="w-full p-8 h-[10rem] ">
        <h2 className="w-full font-black text-3xl mb-8">02. My stack</h2>
        <p>
          I am constantly seeking out new challenges to improve my abilities,
          and I am always eager to explore new technologies and frameworks. I
          believe that self-motivation and the willingness to learn are crucial
          attributes that every successful developer must possess, and I strive
          to embody these qualities in everything that I do.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center w-full p-8 h-[15rem] ">
        <div className="flex flex-wrap w-1/3 gap-4 justify-center text-center ">
          <h3 className="w-full text-2xl">Foundational Technologies</h3>
          <HtmlSvg />
          <CssSvg />
          <JsSvg />
          <GitSvg />
        </div>

        <div className="flex flex-wrap w-1/3 gap-4 justify-center text-center ">
          <h3 className="w-full text-2xl">Styling</h3>
          <TailwindSvg />
        </div>

        <div className="flex flex-wrap w-1/3 gap-4 justify-center text-center ">
          <h3 className="w-full text-2xl">Libraries and Frameworks</h3>
          <NextSvg />
          <ReactSvg />
        </div>
      </div>
    </div>
  );
}

export default Skills;
