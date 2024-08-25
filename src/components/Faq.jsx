import { useState } from "react";

const Faq = ({ question }) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const toggleQuestion = () => {
    setIsQuestionOpen((isOpen) => !isOpen);
    console.log(isQuestionOpen);
  };
  return (
    <>
      <div
        className={`flex cursor-pointer flex-col items-center justify-center gap-5 bg-color-modal/30 px-5 pt-4 rounded-xl transition-all`}
        onClick={toggleQuestion}
      >
        <div className="flex  items-center w-full gap-3 justify-between">
          <p className="text-lg font-medium">{question.question}</p>
          <button className="relative h-4 w-4">
            <div className="absolute h-0.5 w-4 bg-color-secondary"></div>
            <div
              className={`absolute ${
                isQuestionOpen ? `` : `rotate-90`
              } h-0.5 w-4 bg-color-secondary transition-all`}
            ></div>
          </button>
        </div>

        <div
          className={`${
            isQuestionOpen
              ? `visible opacity-100 max-h-[6rem] mb-3`
              : `invisible opacity-0 max-h-0`
          } relative overflow-hidden transition-all text-gray-300 font-satoshi`}
        >
          {question.answer}
        </div>
      </div>
    </>
  );
};

export default Faq;
