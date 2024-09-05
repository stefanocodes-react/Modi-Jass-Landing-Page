import Button from "./Button";
import smiles from "../assets/vectors/Smiles.svg";
import Daniel from "../assets/vectors/daniel.webp";
import Blake from "../assets/vectors/blake.webp";
import Dan from "../assets/vectors/dan.webp";
import Chris from "../assets/hero/review_pic_chris.jpg";
import growAudienceVector from "../assets/vectors/HeroVector.svg";
import Rating from "../assets/vectors/rating_star.svg";
import Image from "next/image";
const Header = ({ toggleModal }) => {
  return (
    <header className="relative" id="home">
      <div className="-z-1 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="flex flex-col justify-start items-center pt-5 gap-8 container md:pt-10">
        <div className="flex flex-col gap-4">
          <h1 className="h1 bg-gradient-to-b from-[#bbb] to-color-light bg-clip-text text-transparent ">
            <span className="">
              Grow Your Brand On X, Craft Your Offer, And Land Your First Client
              In 30 Days
            </span>
          </h1>
          <p className="body-1 text-center text-gray-300">
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
            children={"join my private community"}
            href={"#newsletter"}
            // onClick={toggleModal}
            buttonType={"secondary"}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row gap-[2px]">
              <Image src={Rating} alt="rating star" className="h-3 w-3" />
              <Image src={Rating} alt="rating star" className="h-3 w-3" />
              <Image src={Rating} alt="rating star" className="h-3 w-3" />
              <Image src={Rating} alt="rating star" className="h-3 w-3" />
              <Image src={Rating} alt="rating star" className="h-3 w-3" />
            </div>
            <p className="leading-8 tracking-wide text-sm text-gray-400 pointer-events-none select-none">
              5/5 out of 50+ reviews
            </p>
          </div>

          <div className="flex">
            <Image
              width={200}
              height={200}
              className="w-9 h-9 rounded-full"
              src={Chris}
              alt="happy faces of previous customers"
            />
            <Image
              width={200}
              height={200}
              src={Daniel}
              className="w-9 h-9 rounded-full"
              alt="happy  faces of previous customers"
            />
            <Image
              width={200}
              height={200}
              src={Blake}
              className="w-9 h-9 rounded-full"
              alt="happy faces of previous customers"
            />
            <Image
              width={200}
              height={200}
              className="w-9 h-9 rounded-full"
              src={Dan}
              alt="happy faces of previous customers"
            />
          </div>
        </div>
        <div>
          <img src={growAudienceVector} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
