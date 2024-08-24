import Section from "../components/Section";
import Timeline from "./Timeline";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
function Process() {
  return (
    <Section
      sectionTitle={"My 3 Step System for Growth"}
      tagline="Growth Formula"
      sectionDescription={[
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      ]}
      id={"howitworks"}
    >
      <Timeline />
    </Section>
  );
}
export default Process;
