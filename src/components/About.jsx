import photo from "../assets/imgs/foto-perfil.webp";

function About() {
  return (
    <div className="container mx-auto text-lg w-3/4 flex flex-wrap">
      <div className="w-1/2 p-8">
        <h2 className="w-full font-black text-3xl mb-8">01. About me</h2>
        <p>
          Hello, I am Josue Salas, a self-taught fornt-end developer, residing
          in Santa Cruz de la Sierra. I am deeply passionate about technology
          and creating solutions to complex problems that are both elegant and
          efficient.
          <br /> My interest in the field of technology started at an early age,
          and over the years, I have been continuously expanding my knowledge
          and honing my skills to become a proficient developer. As a
          self-taught developer, I understand the importance of discipline and
          hard work.
        </p>
      </div>
      <div className="avatar w-1/2 p-8 justify-center align-items-center">
        <div className="rounded-xl w-[20rem] bg-sky-800 opacity-75 hover:opacity-100">
          <img
            className="mix-blend-overlay hover:mix-blend-normal"
            src={photo}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
