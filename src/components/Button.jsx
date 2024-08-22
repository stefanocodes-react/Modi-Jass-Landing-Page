const Button = ({ buttonType, children, href, onClick }) => {
  const classes = `${
    buttonType === "primary"
      ? "bg-color-primary hover:opacity-70"
      : "border border-white hover:bg-white hover:text-black"
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
      <a href={href} target="_blank" className={classes}>
        {children}
      </a>
    );
  };

  return href ? linkButton() : button();
};

export default Button;
