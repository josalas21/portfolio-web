import cv from "../assets/josue_salas.pdf";
function Navbar() {
  return (
    <div className="h-[5rem] bg-[#000814] text-[#61A5C2] fixed top-0 left-0 right-0 z-10 ">
      <div className="flex container flex-wrap mx-auto w-3/4 justify-center md:justify-end gap-4 md:gap-8 h-full items-center text-xs md:text-base border-b border-[#61A5C2] ">
        <a href="#about" className="hover:text-[#00FFBF]">
          <span className="text-[#00FFBF]">01. </span> About
        </a>
        <a href="#skills" className="hover:text-[#00FFBF]">
          <span className="text-[#00FFBF]">02. </span> Skills
        </a>
        <a href="#proyects" className="hover:text-[#00FFBF]">
          <span className="text-[#00FFBF]">03. </span> Proyects
        </a>
        <a href="#contact" className="hover:text-[#00FFBF]">
          <span className="text-[#00FFBF]">04. </span> Contact
        </a>
        <a
          type="button"
          href={cv}
          target="_blank"
          className="text-[#A9D6E5] border-[#A9D6E5] hover:text-[#00FFBF] hover:border-[#00FFBF] border p-2 w-12 text-center "
        >
          <span> CV </span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
