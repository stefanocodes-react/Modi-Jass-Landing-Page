import Section from "./Section";
import vector from "../assets/vectors/faqGraphic.svg";
import Button from "./Button";
const FinalCta = () => {
  return (
    <Section>
      <div className="flex md:flex-row flex-col-reverse items-center  gap-8 justify-between rounded-md py-16 px-16 relative overflow-hidden border border-gray-700">
        <div className="flex md:items-start flex-col items-center justify-center gap-4">
          <h4 className="capitalize md:text-left md:text-4xl lg:text-5xl xl:text-[3.375rem] text-[2rem] max-w-[30rem] text-center leading-snug xl:leading-tight font-semibold">
            i want to build my brand on X
          </h4>
          <Button
            href={"https://x.com/MoayadAlazzawi"}
            buttonType={"primary"}
            children={"Ace Your Niche Today"}
          ></Button>
        </div>
        <div className="absolute -z-1 bottom-0 right-[50%] lg:right-[-10%] top-[50%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,255,255,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute -z-1 bottom-0 left-[50%] lg:top-[50%] lg:left-[-10%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,255,255,0.15),rgba(255,255,255,0))]"></div>
        <img
          className="max-w-[13rem] md:max-w-[18rem] lg:max-w-[22rem]"
          src={vector}
          alt=""
        />
      </div>
    </Section>
  );
};

export default FinalCta;
