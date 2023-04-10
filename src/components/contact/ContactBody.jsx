export const ContactBody = ({ CONTENT }) => {
  return (
    <div className="md:w-[40rem] flex flex-wrap gap-2 mx-auto md:mt-20">
      <p>{CONTENT.p_1}</p>
      <p>{CONTENT.p_2}</p>
      <p>{CONTENT.p_3}</p>
      <span className="w-screen text-center py-10 text-4xl">
        {CONTENT.emoji}
      </span>
    </div>
  );
};
