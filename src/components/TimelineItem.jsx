const TimelineItem = ({ item }) => {
  return (
    // timeline left
    <div className="flex flex-col justify-between items-center lg:flex-row">
      <div className="relative text-color-dark flex flex-[1.5] flex-col lg:flex-row gap-20 items-center">
        <span className="absolute text-color-dark -top-[5rem] text-color-dark lg:relative lg:top-0 -z-1 text-[150px] lg:text-[250px] font-black text-color-secondary/5">
          {item.id}
        </span>
        <span className="text-4xl text-color-dark capitalize hidden lg:flex">
          PHASE {item.id}
        </span>
      </div>

      <div className="flex lg:flex-1 flex-col gap-4">
        <h3 className="text-3xl text-center lg:text-left font-semibold text-color-dark">
          {item.title}
        </h3>
        <img
          className=" md:max-w-[400px] m-auto lg:mt-0 lg:ml-0"
          src={item.img}
          alt={`${item.title} illustration`}
        />
        <p className="font-satoshi max-w-[400px] text-color-dark">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
