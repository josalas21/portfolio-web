export const SectionTitle = ({ CONTENT }) => {
  return (
    <h2 className="w-full font-bold text-3xl mb-8 text-[#A9D6E5]">
      <div className="divider">
        <span className="text-[#00FFBF] font-light">{CONTENT.h2.num}</span>
        {CONTENT.h2.title}
      </div>
    </h2>
  );
};
