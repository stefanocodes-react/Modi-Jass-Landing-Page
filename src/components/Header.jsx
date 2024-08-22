import Button from "./Button";
import smiles from "../assets/vectors/Smiles.svg";
import growAudienceVector from "../assets/vectors/HeroVector.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <header className="relative h-screen flex flex-col justify-start items-center gap-8 container md:pt-10">
        <div className="absolute top-0 z-[-1] h-screen w-screen bg-color-body bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        {/* Grid Background */}
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          <h1 className="h1 ">
            Grow Your Brand on X and Get Your First Client in 30 Days
          </h1>
          <p className="body-1 text-center text-gray-300">
            I will help you Build Your Brand on X and Get Your First Client in
            30 Days.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button children={"book a free call"} buttonType={"primary"} />
          <Button children={"grab a free guide 🌟"} buttonType={"secondary"} />
        </div>
        <div className="flex flex-wrap border items-center justify-center border-white/20 px-2 py-1.5 gap-2 rounded-md">
          <img src={smiles} alt="happy faces of previous customers" />
          <p className="leading-8 text-sm pointer-events-none select-none">
            100+ are making money on X
          </p>
        </div>
        <div>
          <img src={growAudienceVector} alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
