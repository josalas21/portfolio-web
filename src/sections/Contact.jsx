import { ContactBody, SectionTitle } from "../components/index.js";
import { CONTACT_CONTENT as CONTENT } from "../constants.js";

export const Contact = () => {
  return (
    <div className="h-full bg-[#000814] text-[#61A5C2]" id="contact">
      <div className="flex container flex-wrap mx-auto w-3/4 pt-10 md:pt-20 text-lg">
        <div className="w-full md:p-8">
          <SectionTitle CONTENT={CONTENT} />
          <ContactBody CONTENT={CONTENT} />
        </div>
      </div>
    </div>
  );
};
