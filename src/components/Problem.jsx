import React from "react";
import Card from "./Card.jsx";
import { problems } from "../constants/index.js";
import Section from "../components/Section.jsx";
import arrowDown from "../assets/vectors/arrow-down.svg";
const Problem = () => {
  return (
    <Section
      id={"problem"}
      className={"gap-4"}
      tagline={"the problem"}
      sectionTitle={"You are doing it the wrong way"}
      sectionDescription={[
        `One year ago I started building my brand on X.`,
        ` I got 900 followers but made $0.`,
        `And like me you’ve probably gone down the “Monetize on X” Rabbit hole, but here’s the problem…`,
      ]}
    >
      <div className="  mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <Card key={problem.id} content={problem} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <img src={arrowDown} width={32} height={32} alt="" />
      </div>
    </Section>
  );
};

export default Problem;
