import Button from "./Button";
import logo from "../assets/hero/modipfp.png";
import { navlinks } from "../constants/index.js";
import NavItems from "./NavItems.jsx";
// TODO: make the nav fixed
const Navbar = () => {
  return (
    <div className="w-full">
      <div className=" mx-auto container w-full flex py-6 bg-none items-center justify-between">
        <div className="flex justify-center w-full items-center gap-12 sm:w-auto sm:justify-normal ">
          <a
            className="text-white hover:opacity-45 transition-all flex justify-center items-center gap-4 text-xl font-satoshi"
            href="#home"
          >
            <span className="sr-only">Home</span>
            <img
              src={logo}
              className="rounded-full"
              width={48}
              height={48}
              alt="Joss Madi Profile Picture Logo"
            />
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
  );
};

export default Navbar;
