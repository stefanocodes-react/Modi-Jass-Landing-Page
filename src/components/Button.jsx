import { FaArrowRightLong } from "react-icons/fa6";
const Button = ({ buttonType, children, href, onClick, icon }) => {
  const classes = `${
    buttonType === "primary"
      ? "bg-color-primary hover:opacity-70"
      : "border text-color-dark border-color-dark hover:bg-white hover:text-black"
  } button transition-all`;
  const button = () => {
    return (
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    );
  };
  const linkButton = () => {
    return (
      <a
        href={href}
        target="_blank"
        className={`${classes} ${
          icon ? "flex items-center gap-3 justify-center" : null
        }`}
      >
        {children}
        {icon ? <FaArrowRightLong className="mt-1" /> : null}
      </a>
    );
  };

  return href ? linkButton() : button();
};

export default Button;
