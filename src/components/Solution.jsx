import Card from "./Card.jsx";
import { solutions } from "../constants/index.js";
import Section from "../components/Section.jsx";

const Solution = () => {
  return (
    <Section
      id={"problem"}
      className={"gap-4 pt-0"}
      tagline={"the solution"}
      sectionTitle={"there is a better way of doing it"}
      sectionDescription={[
        `at 900+ followers I closed my first client in 7 days.`,
        `I started having success through outreach/content getting me clients and inbounds.`,
        `because of these`,
      ]}
    >
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => (
          <Card key={solution.id} content={solution} />
        ))}
      </div>
    </Section>
  );
};

export default Solution;
