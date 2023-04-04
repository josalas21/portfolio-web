import { GithubSvg, LinkedinSvg } from "../assets";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">
            I'm <span className="font-black">Josue Salas</span>, <br />a
            <span className="font-black"> front-end developer</span>.
          </h1>
          <p className="py-6">
            Using the latest technologies and best practices, I develop
            responsive and engaging web apps that provide a seamless user
            experience.
          </p>
          <button className="btn btn-square btn-outline mr-4">
            <GithubSvg />
          </button>
          <button className="btn btn-square btn-outline">
            <LinkedinSvg />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
