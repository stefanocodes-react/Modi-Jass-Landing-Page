import Faq from "./Faq";
import Section from "./Section";
import { questions } from "../constants";
import graphic from "../assets/vectors/arrow-right.svg";
const FrequentlyAskedQuestions = () => {
  return (
    <section
      id="faq"
      className="flex flex-col items-center gap-8 py-16 justify-center container lg:flex-row lg:items-start lg:justify-between"
    >
      <div className="flex relative flex-col items-center gap-6 justify-between">
        <Section
          sectionTitle={`Frequently Asked Questions`}
          className={`pt-0 pb-0 self-start px-0 md:max-w-[25rem] text-left`}
        />
        <img
          className="hidden lg:block lg:absolute lg:bottom-[-3.5rem] lg:right-[-1rem]"
          src={graphic}
          width={128}
          height={128}
          alt=""
        />
      </div>

      <div>
        <div className="flex flex-col justify-center items-center max-w-[40rem] gap-4">
          {questions.map((q) => (
            <Faq question={q} key={q.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
