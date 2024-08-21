import Button from "./Button";
import logo from "../assets/vectors/modi_jass_logo.svg";
import { navlinks } from "../constants/navItems.js";
// Render all navigation links
// TODO: make the nav fixed
const NavItems = ({ links }) => {
  return links.map((link) => {
    return (
      <li key={link.id}>
        <a
          className="text-white/85 transition font-satoshi text-lg hover:text-color-primary"
          href={`${link.url}`}
        >
          {link.title}
        </a>
      </li>
    );
  });
};
const Navbar = () => {
  return (
    <div>
      <div className="mx-auto container w-full backdrop-blur-sm z-1">
        <div className="flex pt-8 items-center justify-between">
          <div className="flex justify-center w-full items-center gap-12 sm:w-auto sm:justify-normal ">
            <a
              className="text-white hover:opacity-45 transition-all flex justify-center items-center gap-4 text-xl font-satoshi"
              href="#"
            >
              <span className="sr-only">Home</span>
              <img src={logo} alt="Joss Madi Profile Picture Logo" />
              <span className="font-semibold">Modi Jass</span>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-8 text-sm">
                <NavItems links={navlinks} />
              </ul>
            </nav>
          </div>

          <div className="hidden items-center gap-4 sm:flex">
            <Button buttonType={"primary"}>Get Started Today!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
