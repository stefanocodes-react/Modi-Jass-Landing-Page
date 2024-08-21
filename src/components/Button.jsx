const Button = ({ buttonType, children, href, onClick }) => {
  const button = () => {
    return (
      <button
        className={`${
          buttonType === "primary"
            ? "bg-color-primary hover:opacity-70"
            : "border border-white hover:bg-white hover:text-black"
        } button transition-all`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  const linkButton = () => {
    return (
      <a href={href} className="button">
        {children}
      </a>
    );
  };

  return href ? linkButton() : button();
};

export default Button;
