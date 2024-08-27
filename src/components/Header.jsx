import Button from "./Button";
import smiles from "../assets/vectors/Smiles.svg";
import growAudienceVector from "../assets/vectors/HeroVector.svg";
import Navbar from "./Navbar";

const Header = ({ toggleModal }) => {
  return (
    <header className="relative bg-color-body" id="home">
      <div className="-z-1 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <Navbar />
      <div className="flex flex-col justify-start items-center gap-8 container md:pt-10">
        <div className="flex flex-col gap-4">
          <h1 className="h1 ">
            Grow Your Brand On X, Craft Your Offer, And Land Your First Client
            In 30 Days
          </h1>
          <p className="body-1 text-center text-color-dark">
            Even if you’re new and know nothing about X.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button
            href={
              "https://x.com/messages/compose?text=Dates&recipient_id=1572288735714099200"
            }
            children={"Build Your Brand Now"}
            buttonType={"primary"}
          />
          <Button
            children={"Grab Your Free Guide"}
            onClick={toggleModal}
            buttonType={"secondary"}
          />
        </div>
        <div className="flex flex-wrap border items-center justify-center border-color-dark/20 px-2 py-1.5 gap-2 rounded-md">
          <img src={smiles} alt="happy faces of previous customers" />
          <p className="leading-8 text-color-dark text-sm pointer-events-none select-none">
            50+ reviews
          </p>
        </div>
        <div>
          <img src={growAudienceVector} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
