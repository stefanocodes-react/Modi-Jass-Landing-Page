import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Problem from "./components/Problem.jsx";
import Solution from "./components/Solution.jsx";
import LeadMagnet from "./components/LeadMagnet.jsx";
import Process from "./components/Process.jsx";
import Results from "./components/Results.jsx";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions.jsx";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-color-body">
      <Header toggleModal={toggleModal} />
      <Problem />
      <Solution />
      <Results />
      <LeadMagnet isOpen={isOpen} toggleModal={toggleModal} />
      <Process />
      <FrequentlyAskedQuestions />
    </div>
  );
}

export default App;
