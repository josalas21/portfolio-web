export const HeroBody = ({ CONTENT }) => {
  return (
    <>
      <span className="text-[#00FFBF] ">{CONTENT.span} </span>
      <h1 className="text-4xl md:text-7xl font-bold my-4 md:my-6 text-[#A9D6E5]">
        {CONTENT.h1}
      </h1>
      <h2 className="text-4xl md:text-7xl font-bold">{CONTENT.h2}</h2>
      <p className="md:w-[35rem] my-4 md:my-8">{CONTENT.p}</p>
    </>
  );
};
