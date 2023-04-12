import { CvButton } from "../components";
import { NavButtons } from "../components/navbar/NavButtons";

export const Navbar = () => {
  return (
    <div className="h-[5rem] bg-[#000814] text-[#61A5C2] fixed top-0 left-0 right-0 z-10 ">
      <div className="flex container flex-wrap mx-auto md:w-3/4 justify-center md:justify-end gap-4 md:gap-8 h-full items-center text-sm md:text-base border-b border-[#61A5C2] ">
        <NavButtons />
        <CvButton />
      </div>
    </div>
  );
};
