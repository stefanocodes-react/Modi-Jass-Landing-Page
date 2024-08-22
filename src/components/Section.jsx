const Section = ({
  tagline = "section",
  sectionTitle,
  sectionDescription,
  children,
  id,
  className,
}) => {
  return (
    <section id={id} className={`bg-color-body`}>
      <div className={`${className} container flex flex-col py-16`}>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="border border-white py-1 px-3 rounded-2xl">
            <span className="text-sm capitalize font-satoshi ">{tagline}</span>
          </div>
          <div className="flex text-center flex-col items-center justify-center gap-4 md:w-4/6">
            <h2 className="h2 text-center capitalize">{sectionTitle}</h2>
            {sectionDescription &&
              sectionDescription.map((description) => (
                <p
                  key={description}
                  className="body-1 text-center text-gray-300"
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
