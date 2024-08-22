import Button from "./Button";
import smiles from "../assets/vectors/Smiles.svg";
import growAudienceVector from "../assets/vectors/HeroVector.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 z-[-1] h-full w-full bg-color-body bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:40px_40px]"></div>
      <Navbar />
      <header className="flex flex-col justify-start items-center gap-8 container md:pt-10">
        {/* Grid Background */}
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          <h1 className="h1 ">
            Grow Your Brand on X and Get Your First Client in 30 Days
          </h1>
          <p className="body-1 text-center text-gray-300">
            Even if you’re new and know nothing about X.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button children={"Build Your Brand Now"} buttonType={"primary"} />
          <Button children={"Grab Your Free Guide"} buttonType={"secondary"} />
        </div>
        <div className="flex flex-wrap border items-center justify-center border-white/20 px-2 py-1.5 gap-2 rounded-md">
          <img src={smiles} alt="happy faces of previous customers" />
          <p className="leading-8 text-sm pointer-events-none select-none">
            50+ reviews
          </p>
        </div>
        <div>
          <img src={growAudienceVector} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
