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
            <div className="border border-white py-1 px-3 rounded-2xl">
              <span className="text-sm capitalize font-satoshi ">
                {tagline}
              </span>
            </div>
          )}

          <div className="flex text-center flex-col items-center justify-center gap-4">
            <h2
              className={`h2 text-center capitalize bg-gradient-to-r from-[#ccc] to-color-light bg-clip-text text-transparent`}
            >
              {sectionTitle}
            </h2>
            {sectionDescription &&
              sectionDescription.map((description, idx) => (
                <p
                  key={idx}
                  className={`body-1 text-center text-gray-300 md:w-4/6`}
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
