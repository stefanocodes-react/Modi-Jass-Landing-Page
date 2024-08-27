const Section = ({
  tagline,
  sectionTitle,
  sectionDescription,
  children,
  id,
  className,
}) => {
  return (
    <section id={id}>
      <div className={`container flex flex-col py-16 ${className}`}>
        <div className="flex flex-col justify-center items-center gap-3">
          {tagline && (
            <div className="border border-color-dark py-1 px-3 rounded-2xl">
              <span className="text-sm text-color-dark capitalize font-satoshi ">
                {tagline}
              </span>
            </div>
          )}

          <div className="flex text-center flex-col items-center justify-center gap-4">
            <h2 className={`h2 text-color-dark text-center capitalize`}>
              {sectionTitle}
            </h2>
            {sectionDescription &&
              sectionDescription.map((description, idx) => (
                <p
                  key={idx}
                  className="body-1 text-center text-color-dark md:w-4/6"
                >
                  {description}
                </p>
              ))}
            {/* <p className="body-1 text-center text-gray-300">
              {sectionDescription}
            </p> */}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
