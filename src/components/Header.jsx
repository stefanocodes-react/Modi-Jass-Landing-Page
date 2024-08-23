import Button from "./Button";
import smiles from "../assets/vectors/Smiles.svg";
import growAudienceVector from "../assets/vectors/HeroVector.svg";
import Navbar from "./Navbar";

const Header = ({ toggleModal }) => {
  return (
    <div className="relative" id="home">
      {/* <div className="absolute top-0 z-[-11] h-full w-full bg-[radial-gradient(#ffffff33_1px,#_1px)] bg-[size:40px_40px]"></div> */}
      {/* <div className="absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(ellipse_50%_50%_at_50%_5%,rgba(120,119,198,0.05),rgba(255,255,255,0))]"></div> */}
      <div class="-z-1 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      {/* <div className="absolute top-0 z-[-11] h-full w-full bg-blue-800 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:40px_40px]"></div> */}
      <Navbar />
      <header className="flex flex-col justify-start items-center gap-8 container md:pt-10">
        {/* Grid Background */}
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          <h1 className="h1 ">
            How To Grow Your Brand On X, Craft Your Offer, And Land Your First
            Client In 30 Days
          </h1>
          <p className="body-1 text-center text-gray-300">
            Even if you’re new and know nothing about X.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button
            href={"https://x.com/MoayadAlazzawi"}
            children={"Build Your Brand Now"}
            buttonType={"primary"}
          />
          <Button
            children={"Grab Your Free Guide"}
            onClick={toggleModal}
            buttonType={"secondary"}
          />
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
