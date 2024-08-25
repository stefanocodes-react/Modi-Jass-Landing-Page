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
      <main className="bg-color-body">
        <Header toggleModal={toggleModal} />
        <Problem />
        <Solution />
        <Results />
        <LeadMagnet isOpen={isOpen} toggleModal={toggleModal} />
        <Process />
        <FrequentlyAskedQuestions />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
