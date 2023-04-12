import { NavButton } from "./NavButton";
import { NAVBAR_LINKS as LINKS } from "../../constants.js";

export const NavButtons = () => {
  return (
    <>
      {LINKS.map((link) => (
        <NavButton link={link} key={link.section} />
      ))}
    </>
  );
};
