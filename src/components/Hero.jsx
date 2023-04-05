import { GithubSvg, LinkedinSvg } from "../assets";

function Hero() {
  return (
    <div className="min-h-screen bg-[#000814] text-[#61A5C2] pt-[5rem] ">
      <div className="container mx-auto text-lg w-3/4 flex flex-col flex-wrap p-8 ">
        <span className="text-[#00FFBF] ">Hi, my name is</span>
        <h1 className="text-7xl font-bold my-6 text-[#A9D6E5]">Josue Salas.</h1>
        <h1 className="text-7xl font-bold">Front-end developer.</h1>
        <p className="w-[35rem] my-8">
          Using the latest technologies and best practices, I develop responsive
          and engaging web apps that provide a seamless user experience.
        </p>
        <div className="flex gap-8">
          <a className="text-[#00FFBF] hover:scale-125" href="">
            <GithubSvg />
          </a>
          <a className="text-[#00FFBF] hover:scale-125" href="">
            <LinkedinSvg />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// div className="hero-content text-center">
//         <div className="max-w-md">
//           <h1 className="text-4xl font-bold">
//             I'm <span className="font-black">Josue Salas</span>, <br />a
//             <span className="font-black"> front-end developer</span>.
//           </h1>
//           <p className="py-6">
//             Using the latest technologies and best practices, I develop
//             responsive and engaging web apps that provide a seamless user
//             experience.
//           </p>
//           <button className="btn btn-square btn-outline mr-4">
//             <GithubSvg />
//           </button>
//           <button className="btn btn-square btn-outline">
//             <LinkedinSvg />
//           </button>
//         </div>
//       </div>
