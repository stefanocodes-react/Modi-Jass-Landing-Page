import TimelineItem from "./TimelineItem.jsx";
import { process } from "../constants/index.js";
const Timeline = () => {
  return (
    <div className="relative flex flex-col gap-20 pt-16 ">
      {process.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}

      <div
        id="timeline-progress-bar"
        className="w-0.5 hidden lg:block m-auto left-0 right-0 top-20 h-[95%] absolute bg-gradient-to-b from-color-primary to-color-secondary -z-[-1] "
      >
        <div
          id="timeline-center"
          className="col-span-1 row-span-2 w-[20px] md:w-auto flex justify-center items-center z-10"
        >
          <div className="  w-4 h-4 absolute top-0 m-auto bg-white rounded-full z-10 border-2 border-black" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
