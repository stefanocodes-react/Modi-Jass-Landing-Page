import ConvertKitForm from "convertkit-react";
import cross from "../assets/vectors/cross.svg";
import logo from "../assets/vectors/modipfp2.png";
const MY_FORM_ID = 6724635;

function Modal({ isOpen, toggleModal }) {
  const config = {
    formId: MY_FORM_ID,
    template: "minimal",
    emailPlaceholder: "Enter an email address",
    namePlaceholder: "Name",
    headingText: "Money Machine",
    disclaimerText: "",
    submitText: "Grab Your Free Copy",
    className: "ck-fm bg-color-modal opacity-100 z-10  flex flex-col gap-4",
  };

  //   <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
  //   <div className="flex items-start gap-4">
  //     <span className="text-green-600">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth="1.5"
  //         stroke="currentColor"
  //         className="size-6"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //         />
  //       </svg>
  //     </span>

  //     <div className="flex-1">
  //       <strong className="block font-medium text-gray-900"> Changes saved </strong>

  //       <p className="mt-1 text-sm text-gray-700">Your product changes have been saved.</p>
  //     </div>

  //     <button className="text-gray-500 transition hover:text-gray-600">
  //       <span className="sr-only">Dismiss popup</span>

  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth="1.5"
  //         stroke="currentColor"
  //         className="size-6"
  //       >
  //         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  //       </svg>
  //     </button>
  //   </div>
  // </div>
  return (
    <div
      className={` ${
        isOpen ? "opacity-100 visible z-10" : "opacity-0 invisible -z-1"
      } absolute transition top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-color-modal p-[2.5rem] rounded-lg w-[90%] max-w-[31.25rem]`}
    >
      <div className="pb-8 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center pb-4">
          <img
            className="rounded-full"
            width={128}
            height={128}
            src={logo}
            alt=""
          />
        </div>
        <div className="pb-4 text-center">
          <p className="text-3xl font-semibold">Money Machine</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="font-satoshi text-center">
            From struggling with getting clients to attracting them easily.
          </p>
          <p className="font-satoshi text-center">
            I shared all my secrets in this guide.
          </p>
        </div>
      </div>

      <ConvertKitForm {...config}></ConvertKitForm>
      <button onClick={toggleModal} className="absolute top-4 right-4 z-10">
        <img height={28} width={28} src={cross} alt="" />
      </button>
    </div>
  );
}

export default Modal;
