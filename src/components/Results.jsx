import Section from "./Section";
import Review from "./Testimonial";
import reviews from "../constants/index.js";
const Results = () => {
  return (
    <Section
      sectionTitle={"Testimonials from people just like you"}
      sectionDescription={[
        "Look how many people are making money around the world right now...",
        `You’re just 1 step away from getting results like this`,
      ]}
      tagline="results"
      id={"testimonial"}
    >
      <div className="  mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review src={review} key={review} />
        ))}
      </div>
    </Section>
  );
};

export default Results;
