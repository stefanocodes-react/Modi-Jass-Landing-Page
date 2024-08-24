const TimelineItem = ({ item }) => {
  return (
    // timeline left
    <div className="flex flex-col justify-between items-center lg:flex-row">
      <div className="relative flex flex-[1.5] flex-col lg:flex-row gap-20 items-center">
        <span className="absolute -top-[10rem] lg:relative lg:top-0 -z-1 text-[250px] font-black text-color-secondary/10">
          {item.id}
        </span>
        <span className="text-4xl capitalize hidden lg:flex">
          PHASE {item.id}
        </span>
      </div>
      <div
        id="timeline-progress-bar"
        className="w-0.5 hidden lg:block m-auto left-0 right-0 top-20 h-[90%] absolute bg-gradient-to-b from-color-primary to-color-secondary -z-[-1] "
      >
        <div
          id="timeline-center"
          className="col-span-1 row-span-2 w-[20px] md:w-auto flex justify-center items-center z-10"
        >
          <div className="w-4 h-4 absolute top-0 bg-white rounded-full z-10 border-2 border-black"></div>
        </div>
      </div>

      <div className="flex lg:flex-1 flex-col gap-4">
        <h3 className="text-3xl text-center lg:text-left font-semibold text-gray-100">
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
