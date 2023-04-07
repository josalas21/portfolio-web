import { SKILLS } from "../constants";

function Skills() {
  return (
    <div
      className="md:min-h-screen h-full bg-[#000814] text-[#61A5C2] pt-20"
      id="skills"
    >
      <div className="flex container flex-wrap mx-auto w-3/4 text-lg">
        <div className="w-full md:p-8 md:h-full ">
          <h2 className="w-full font-bold text-3xl mb-8 text-[#A9D6E5]">
            <div className="divider">
              <span className="text-[#00FFBF] font-light">02.</span> Skills
            </div>
          </h2>
          <p>
            I'm constantly seeking out new challenges to improve my abilities,
            and I'm always eager to explore new technologies and frameworks. I
            believe that self-motivation and the willingness to learn are
            crucial attributes that every successful developer must possess, and
            I strive to embody these qualities in everything that I do.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 w-full justify-center mt-8 md:mt-0">
          {SKILLS.map((skill) => (
            <div className="flex flex-col gap-4 w-80 p-8 border border-[#A9D6E5]">
              <h3 className="text-[#00FFBF] text-center mb-4">{skill.title}</h3>

              {skill.techs.map((tech) => (
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 font-light">
                    <img src={tech.img} height={40} width={40} alt={tech.img} />
                    <p> {tech.tech}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

{
  /* <img src={tech.img} height={40} width={40} alt={tech.img} /> */
}
