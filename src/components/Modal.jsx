import { useState } from "react";
import cross from "../assets/vectors/cross.svg";
import logo from "../assets/vectors/modipfp2.png";
const MY_FORM_ID = 6724635;

function Modal({ isOpen, toggleModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
      <form
        action={`https://app.convertkit.com/forms/${MY_FORM_ID}/subscriptions`}
        method="post"
        target="_self"
        data-sv-form={MY_FORM_ID}
        data-uid={`caa8471d36`}
        data-format="inline"
        data-options={
          "&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;amp;utm_medium=referral&amp;amp;utm_campaign=poweredby&amp;amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;uid&quot;:&quot;&quot;,&quot;version&quot;:&quot;5&quot;"
        }
        data-version="5"
        className="ck-fm bg-color-modal opacity-100 z-10  flex flex-col gap-4"
      >
        <input
          type="text"
          name="fields[first_name]"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="Name"
          aria-label="First name"
          id="ck-first-name"
          required
        />
        <input
          type="email"
          name="email_address"
          placeholder="Enter an email address"
          aria-label="Email"
          id="ck-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Grab Your Free Copy</button>
      </form>
      <button onClick={toggleModal} className="absolute top-4 right-4 z-10">
        <img height={28} width={28} src={cross} alt="" />
      </button>
    </div>
  );
}

export default Modal;
