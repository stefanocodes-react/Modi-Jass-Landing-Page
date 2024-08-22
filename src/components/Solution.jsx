import Card from "./Card.jsx";
import { solutions } from "../constants/index.js";
import Section from "../components/Section.jsx";
const Solution = () => {
  return (
    <Section
      id={"problem"}
      tagline={"the solution"}
      sectionTitle={"there is a better way of doing it"}
      sectionDescription={`Today I’m travelling the world and making 5x a doctor’s salary while working less than 2 hours a day.`}
    >
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => (
          <Card content={solution} color={"#13ce66"} />
        ))}
      </div>
    </Section>
  );
};

export default Solution;
