import photo from "../assets/imgs/foto-perfil.webp";

function About() {
  return (
    <div className="pt-20 h-full bg-[#000814] text-[#61A5C2]" id="about">
      <div className="container mx-auto text-lg w-3/4 flex flex-wrap">
        <h2 className="w-full font-bold text-3xl mb-8 text-[#A9D6E5]">
          <div className="divider">
            <span className="text-[#00FFBF] font-light">01.</span> About me
          </div>
        </h2>
        <div className="lg:w-1/2 md:p-8">
          <p>
            Hello, I'm Josue Salas, a self-taught front-end developer, residing
            in Santa Cruz de la Sierra. I'm deeply passionate about technology
            and creating solutions to complex problems that are both elegant and
            efficient.
          </p>
          <br />
          <p>
            My interest in the field of technology started at an early age, and
            over the years, I have been continuously expanding my knowledge and
            honing my skills to become a proficient developer. As a self-taught
            developer, I understand the importance of discipline and hard work.
          </p>
        </div>
        <div className="avatar w-full lg:w-1/2 p-8 justify-center align-items-center">
          <div className="rounded-xl flex w-[20rem] justify-center">
            <img src={photo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
