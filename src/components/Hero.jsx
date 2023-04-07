import github from "../assets/svgs/github.svg";
import linkedin from "../assets/svgs/linkedin.svg";

function Hero() {
  return (
    <div className="pt-[8rem] h-full bg-[#000814] text-[#61A5C2] md:pt-[5rem] ">
      <div className="container mx-auto text-lg w-3/4 flex flex-col flex-wrap md:p-8 ">
        <span className="text-[#00FFBF] ">Hi, my name is</span>
        <h1 className="text-5xl md:text-7xl font-bold my-4 md:my-6 text-[#A9D6E5]">
          Josue Salas.
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold">Front-end developer.</h1>
        <p className="md:w-[35rem] my-4 md:my-8">
          Using the latest technologies and best practices, I develop responsive
          and engaging web apps that provide a seamless user experience.
        </p>
        <div className="flex gap-8">
          <a className="text-[#00FFBF] hover:scale-125" href="">
            <img src={github} alt="github" height={40} width={40} />
          </a>
          <a className="text-[#00FFBF] hover:scale-125" href="">
            <img src={linkedin} alt="github" height={40} width={40} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
