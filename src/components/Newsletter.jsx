import Form from "./Form.jsx";
import Section from "./Section";
import Modi from "../assets/hero/modipfp.webp";
import { newsletter } from "../constants/index.js";
const Newsletter = () => {
  return (
    <Section
      tagline={"newsletter"}
      sectionTitle={`Join my Private Community of 80+ members`}
      id={"newsletter"}
    >
      <div className="mt-10 flex gap-8 justify-center relative">
        <div className="absolute rounded-lg inset-0 z-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#1d1d2e_40%,#2f468c_100%)]"></div>
        <div className="z-1 flex flex-col md:flex-row items-center justify-center max-w-[60rem] gap-8 py-8">
          <div className="flex flex-col items-start px-4 md:px-0 md:items-start justify-center flex-[1.25]">
            <h3 className="text-left text-2xl md:text-3xl font-medium font-clash">
              What you will get:
            </h3>
            <div>
              <ul className="flex flex-col gap-4 mt-4 text-base  font-satoshi font-light ">
                {newsletter.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-color-modal/80 flex flex-1 flex-col items-center justify-center gap-4 p-8">
            <img
              className="rounded-full"
              src={Modi}
              width={128}
              height={128}
              alt=""
            />
            <Form
              formStyles={`bg-transparent w-full`}
              buttonContent={"sign up to newsletter"}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Newsletter;
