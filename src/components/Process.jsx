import Section from "./Section";
import Timeline from "./Timeline";
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
