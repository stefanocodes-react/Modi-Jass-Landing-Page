import TimelineItem from "./TimelineItem.jsx";
import { process } from "../constants/index.js";
const Timeline = () => {
  return (
    <div className="relative flex flex-col gap-20 pt-16 ">
      {process.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Timeline;
