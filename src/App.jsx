import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import InitialSocialProof from "./components/InitialSocialProof.jsx";
import Problem from "./components/Problem.jsx";
import Solution from "./components/Solution.jsx";
import LeadMagnet from "./components/LeadMagnet.jsx";
import Process from "./components/Process.jsx";
import Results from "./components/Results.jsx";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar.jsx";
import Newsletter from "./components/Newsletter.jsx";
function App() {
  // Modal Function
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar />
      <Header toggleModal={toggleModal} />
      <main className="bg-color-body">
        <Newsletter />
        <InitialSocialProof />
        <Problem />
        <Solution />
        <Process />
        <Results />
        <FrequentlyAskedQuestions />
        <FinalCta />
        <LeadMagnet isOpen={isOpen} toggleModal={toggleModal} />
      </main>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
