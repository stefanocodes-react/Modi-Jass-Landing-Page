const Button = ({ buttonType, children, href, onClick }) => {
  const button = () => {
    return (
      <button
        className={`${
          buttonType === "primary" ? "bg-color-primary" : "border border-white"
        } button`}
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
