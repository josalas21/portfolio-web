export const NavButton = ({ link }) => {
  return (
    <a href={link.href} className="hover:text-[#00FFBF]">
      <span className="text-[#00FFBF] hidden md:inline">{link.num} </span>
      {link.section}
    </a>
  );
};
