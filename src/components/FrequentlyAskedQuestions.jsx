import Faq from "./Faq";
import Section from "./Section";
import { questions } from "../constants";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-16 justify-center container lg:flex-row lg:items-start lg:justify-between">
      <Section
        sectionTitle={`Frequently Asked Questions`}
        className={` self-start px-0 md:max-w-[25rem] text-left py-0`}
      />
      <div>
        <div className="flex flex-col justify-center items-center max-w-[40rem] gap-4">
          {questions.map((q) => (
            <Faq question={q} key={q.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
