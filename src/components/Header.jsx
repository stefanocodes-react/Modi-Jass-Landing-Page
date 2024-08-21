import Button from "./Button";
import smiles from "../assets/vectors/Smiles.svg";
const Header = () => {
  return (
    <header className="flex min-h-screen flex-col justify-start items-center pt-8 gap-8 container">
      <div className="flex flex-col gap-4">
        <h1 className="h1">
          Grow Your Brand on X and Get Your First Client in 30 Days
        </h1>
        <p className="body-1 text-center">
          I will help you Build Your Brand on X and Get Your First Client in 30
          Days.
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <Button children={"book a free call"} buttonType={"primary"} />
        <Button children={"grab a free guide 🌟"} buttonType={"secondary"} />
      </div>
      <div className="flex flex-wrap border items-center justify-center border-white/20 px-2 py-1.5 gap-2 rounded-md">
        <img src={smiles} alt="happy faces of previous customers" />
        <p className="leading-8 text-sm">100+ are making money on X</p>
      </div>
    </header>
  );
};

export default Header;
