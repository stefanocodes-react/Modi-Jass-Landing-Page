import { useState } from "react";
const REACT_FORM_ID = import.meta.env.VITE_FORM_KEY;
const Form = ({ formStyles, buttonContent = `grab your free copy` }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  return (
    <form
      action={`https://app.convertkit.com/forms/${REACT_FORM_ID}/subscriptions`}
      method="post"
      target="_self"
      data-sv-form={REACT_FORM_ID}
      data-uid={`caa8471d36`}
      data-format="inline"
      data-options={
        "&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;amp;utm_medium=referral&amp;amp;utm_campaign=poweredby&amp;amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;uid&quot;:&quot;&quot;,&quot;version&quot;:&quot;5&quot;"
      }
      data-version="5"
      className={`${formStyles} ck-fm bg-color-modal opacity-100 z-10  flex flex-col gap-4`}
    >
      <input
        type="text"
        name="fields[first_name]"
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
        placeholder="Name"
        aria-label="First name"
        id="ck-first-name"
        required
      />
      <input
        type="email"
        name="email_address"
        placeholder="Enter your email address"
        aria-label="Email"
        id="ck-email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <button className="capitalize" type="submit">
        {buttonContent}
      </button>
    </form>
  );
};

export default Form;
