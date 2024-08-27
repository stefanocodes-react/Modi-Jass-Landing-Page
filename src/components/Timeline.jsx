import TimelineItem from "./TimelineItem.jsx";
import { process } from "../constants/index.js";
import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const Timeline = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start", "end", "start", "end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "100deg"]);

  return (
    <div className="relative flex flex-col gap-20 pt-24 md:16">
      {process.map((item, idx) => (
        <TimelineItem key={idx} item={item} />
      ))}

      <div
        id="timeline-progress-bar"
        className="w-0.5 hidden lg:block m-auto left-0 right-0 top-20 h-[95%] absolute bg-gradient-to-b from-color-primary to-color-secondary -z-[-1] "
      >
        <div
          id="timeline-center"
          className="col-span-1 row-span-2 w-[20px] md:w-auto flex justify-center items-center z-10"
        >
          <motion.div
            ref={timelineRef}
            style={{ rotate }}
            className={` w-4 h-4
          absolute top-0 m-auto bg-white rounded-full z-10 border-2
          border-black`}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
