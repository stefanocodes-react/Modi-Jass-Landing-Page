const Section = ({
  tagline,
  sectionTitle,
  sectionDescription,
  children,
  id,
  className,
}) => {
  return (
    <section id={id} className={`${className} bg-color-body`}>
      <div className="container flex flex-col py-12">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="border border-white py-1 px-3 rounded-2xl">
            <span className="text-sm capitalize font-satoshi">{tagline}</span>
          </div>
          <div className="flex text-center flex-col items-center justify-center gap-2 md:w-4/6">
            <h2 className="h2 text-center">{sectionTitle}</h2>
            <p className="body-1 text-center">{sectionDescription}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
