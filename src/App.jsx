import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Problem from "./components/Problem.jsx";
import Solution from "./components/Solution.jsx";
import LeadMagnet from "./components/LeadMagnet.jsx";
import Process from "./components/Process.jsx";
import Results from "./components/Results.jsx";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  // Modal Function
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header toggleModal={toggleModal} />
      <main className="bg-color-body">
        <Problem />
        <Solution />
        <Results />
        <Process />
        <FrequentlyAskedQuestions />
        <FinalCta />
        <LeadMagnet isOpen={isOpen} toggleModal={toggleModal} />
      </main>
      <Footer />
    </>
  );
}

export default App;
