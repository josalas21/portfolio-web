function Skills() {
  return (
    <div className="min-h-screen bg-[#000814] text-[#61A5C2]" id="SKILLS">
      <div className="flex container flex-wrap mx-auto w-3/4 text-lg">
        <div className="w-full p-8 h-[10rem] ">
          <h2 className="w-full font-bold text-3xl mb-8 text-[#A9D6E5]">
            <span className="text-[#00FFBF] font-light">02.</span> Skills
          </h2>
          <p>
            I am constantly seeking out new challenges to improve my abilities,
            and I am always eager to explore new technologies and frameworks. I
            believe that self-motivation and the willingness to learn are
            crucial attributes that every successful developer must possess, and
            I strive to embody these qualities in everything that I do.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full p-8 h-[15rem] font-bold ">
          <div className="flex flex-wrap w-1/4 gap-4 justify-center text-center ">
            <h3 className="w-full text-[#A9D6E5]">Programming Languages</h3>
            <ul className="font-light text-[#00FFBF]">
              <li>JavaScript (ES6)</li>
              <li> Python</li>
            </ul>
          </div>

          <div className="flex flex-wrap w-1/4 gap-4 justify-center text-center ">
            <h3 className="w-full text-[#A9D6E5]">Styling</h3>
            <ul className="font-light text-[#00FFBF]">
              <li>CSS/Sass</li>
              <li>TailwindCSS</li>
            </ul>
          </div>

          <div className="flex flex-wrap w-1/4 gap-4 justify-center text-center ">
            <h3 className="w-full text-[#A9D6E5]">Libraries & Frameworks</h3>
            <ul className="font-light text-[#00FFBF]">
              <li>React</li>
              <li>Astro</li>
            </ul>
          </div>

          <div className="flex flex-wrap w-1/4 gap-4 justify-center text-center ">
            <h3 className="w-full text-[#A9D6E5]">Tools & Platforms</h3>
            <ul className="font-light text-[#00FFBF]">
              <li>Git</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
