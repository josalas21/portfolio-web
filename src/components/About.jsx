import photo from "../assets/imgs/foto-perfil.webp";

function About() {
  return (
    <div className="min-h-screen bg-[#000814] text-[#61A5C2] ">
      <div className="container mx-auto text-lg w-3/4 flex flex-wrap mt-[10rem] ">
        <div className="w-1/2 p-8">
          <h2 className="w-full font-bold text-3xl mb-8 text-[#A9D6E5]">
            <span className="text-[#00FFBF] font-light">01.</span> About me
          </h2>
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
        <div className="avatar w-1/2 p-8 justify-center align-items-center">
          <div className="rounded-xl w-[20rem] bg-sky-800 opacity-75 hover:opacity-100">
            <img
              className="mix-blend-overlay hover:mix-blend-normal"
              src={photo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
