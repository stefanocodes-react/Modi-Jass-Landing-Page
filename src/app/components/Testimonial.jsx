import Image from "next/image";
import React from "react";
const Review = ({ src }) => {
  return <Image src={src} alt="testimonial" />;
};

export default Review;
