import Card from "./Card.jsx";
import { solutions } from "../constants/index.js";
import Section from "./Section.jsx";
import Button from "./Button.jsx";
const Solution = () => {
  return (
    <>
      <Section
        id="benefits"
        className={"gap-4 pt-0"}
        tagline={"the solution"}
        sectionTitle={"the proven way to grow on X"}
        sectionDescription={[
          `at 900+ followers I closed my first client in 7 days.`,
          `I started having success through outreach/content getting me clients and inbounds. because of these...`,
        ]}
      >
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution.id} content={solution} />
          ))}
        </div>
        <div className=" mt-8 flex items-center justify-center">
          <Button
            href={
              "https://x.com/messages/compose?text=Dates&recipient_id=1572288735714099200"
            }
          >
            Let's Build My Brand
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Solution;
