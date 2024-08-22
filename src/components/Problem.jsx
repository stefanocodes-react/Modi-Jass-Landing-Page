import React from "react";
import Card from "./Card.jsx";
import { problems } from "../constants/index.js";
import Section from "../components/Section.jsx";
const Problem = () => {
  return (
    <Section
      id={"problem"}
      tagline={"the problem"}
      sectionTitle={"You are doing it the wrong way"}
      sectionDescription={`Just like me 2 years ago– You’re probably stuck in a job you don’t like while 
studying for a degree you don’t need…`}
    >
      <div className="  mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <Card content={problem} color={"#f06868"} />
        ))}
      </div>
    </Section>
  );
};

export default Problem;
