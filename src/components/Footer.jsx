import { RiTwitterXLine } from "react-icons/ri";
import profile from "../assets/vectors/modipfp3-bg-removed.png";
import { footer } from "../constants/index.js";
import Button from "./Button.jsx";
const Footer = () => {
  return (
    <footer id="footer" className="bg-color-dark">
      <div className=" container px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <img className="max-w-[10rem] rounded-lg" src={profile} alt="" />
        </div>

        <p className="mx-auto mt-2 text-3xl font-semibold max-w-md text-center leading-relaxed text-color-white">
          Modi Jass
        </p>

        <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {footer.map((link) => (
            <li key={link.id}>
              <a
                className="text-gray-300 transition hover:text-gray-400/75"
                href={link.url}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <a
            className="transition-all hover:opacity-80 hover:-translate-y-[3px]"
            href="https://x.com/MoayadAlazzawi"
          >
            <RiTwitterXLine size={25} />
          </a>
          <a
            className="transition-all flex font-satoshi items-center gap-2 hover:opacity-80 hover:-translate-y-[3px]"
            href="mailto:Moayad@MoayadJ.com"
          >
            {/* <MdOutlineMail size={} /> */}
            <p>Moayad@MoayadJ.com</p>
          </a>
        </ul>
        <div className="flex items-center justify-center mt-8">
          <Button
            href={"https://x.com/MoayadAlazzawi"}
            children={`Yes I Want Acess`}
            buttonType={"primary"}
            icon
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
