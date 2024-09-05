import socialproof from "../assets/hero/initialsocialproof.png";
import ratings from "../assets/hero/ratings.svg";
import ReviewPic from "../assets/hero/review_pic_chris.jpg";
import Image from "next/image";

const InitialSocialProof = () => {
  return (
    <div className="container mt-4 flex flex-col gap-4 max-w-[60rem]">
      <h2 className="h2 text-center capitalize bg-gradient-to-r from-[#ccc] to-color-light bg-clip-text text-transparent">
        Don't Believe me ? Give this a read
      </h2>
      <div className="flex gap-2 flex-col rounded-md bg-color-light p-5">
        <div className="flex flex-col items-start gap-4 justify-between">
          <img src={ratings} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-color-dark body-1">
            <span className="text-color-primary">Modi knows his stuff.</span>{" "}
            I've seen his posts performing really well recently, so i asked him
            if we could hop on a call. I just wanted to pick his brain for a few
            minutes.
          </p>
          <p className="text-color-dark body-1">
            It was supposed to be just a 15-minute call, but he stayed on with
            me for about 45!{" "}
            <span className="text-color-primary">
              He gave me a lot of helpful insights
            </span>
            , and it really helped me think about things in a better way.
          </p>
          <p className="text-color-dark body-1">
            My next post I wrote after speaking with him was one of my
            top-performing posts in the last few months. It really seemed to
            strike a chord and connect with people and it{" "}
            <span className="text-color-primary">got way more engagement</span>{" "}
            in the first hour or two than i usually get
          </p>
          <p className="text-color-dark body-1">
            He has a great eye for detail and just knows what works. I really
            trust his opinion. I see him being an expert in his carf, and{" "}
            <span className="text-color-primary">
              he's someone i would definitely consider for help in this space
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start  mt-2">
          <div className="flex  items-center gap-2">
            <Image
              className="rounded-full bg-cover object-fit"
              src={ReviewPic}
              width={32}
              alt=""
            />
            <p className="text-color-dark font-medium">Christopher Walker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialSocialProof;
