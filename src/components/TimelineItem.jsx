const TimelineItem = ({ item }) => {
  return (
    // timeline left
    <div className="flex flex-col justify-between items-center lg:flex-row">
      <div className="relative flex flex-[1.5] flex-col lg:flex-row gap-20 items-center">
        <span className="absolute -top-[8rem] lg:relative lg:top-0 z-1 text-[150px] lg:text-[250px] font-black text-color-secondary/5">
          {item.id}
        </span>
        <span className="text-4xl capitalize hidden lg:flex">
          PHASE {item.id}
        </span>
      </div>

      <div className="flex lg:flex-1 flex-col gap-4">
        <h3 className="sr-only text-3xl text-center lg:text-left font-semibold text-gray-100">
          {item.title}
        </h3>
        <img
          className=" md:max-w-[400px] m-auto lg:mt-0 lg:ml-0"
          src={item.img}
          alt={`${item.title} illustration`}
        />
        <p className="font-satoshi max-w-[400px] text-gray-300">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
