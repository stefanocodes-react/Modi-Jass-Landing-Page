import { useState } from "react";
import cross from "../assets/vectors/cross.svg";
import logo from "../assets/vectors/modipfp3-bg-removed.png";
import Form from "./Form";

function LeadMagnet({ isOpen, toggleModal }) {
  return (
    <div
      className={` ${
        isOpen ? "opacity-100 visible z-50" : "opacity-0 invisible -z-1"
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
      <Form />
      <button onClick={toggleModal} className="absolute top-4 right-4 z-10">
        <img height={28} width={28} src={cross} alt="" />
      </button>
    </div>
  );
}

export default LeadMagnet;
