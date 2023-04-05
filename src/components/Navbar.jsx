function Navbar() {
  return (
    <div className="h-[5rem] bg-[#000814] text-[#61A5C2] ">
      <div className="flex container flex-wrap mx-auto w-3/4 justify-end gap-8 h-full items-center">
        <a href="#ABOUT" className="hover:text-[#00FFBF]">
          <span className="text-[#00FFBF]">01. </span> About
        </a>
        <a href="#SKILLS" className="hover:text-[#00FFBF]">
          <span className="text-[#00FFBF]">02. </span> Skills
        </a>
        <a href="#PROYECTS" className="hover:text-[#00FFBF]">
          <span className="text-[#00FFBF]">03. </span> Proyects
        </a>
        <a href="#CONTACT" className="hover:text-[#00FFBF]">
          <span className="text-[#00FFBF]">04. </span> Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
