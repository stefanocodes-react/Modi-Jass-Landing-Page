import Section from "./Section";
import Timeline from "./Timeline";
function Process() {
  return (
    <Section
      sectionTitle={"My 3 Step System for Growth"}
      tagline="Growth Formula"
      sectionDescription={[
        `Elevate your brand in three steps Position yourself clearly, create engaging content, and craft irresistible offers.`,
      ]}
      id={"howitworks"}
    >
      <Timeline />
    </Section>
  );
}
export default Process;
