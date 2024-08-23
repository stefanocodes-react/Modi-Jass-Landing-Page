import "./App.css";
import Header from "./components/Header.jsx";
import LeadMagnet from "./components/LeadMagnet.jsx";
import Problem from "./components/Problem.jsx";
import Results from "./components/Results.jsx";
import Solution from "./components/Solution.jsx";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div class="fixed left-0 top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 bg-blue-800 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
      </div>

      <Header toggleModal={toggleModal} />
      <Problem />
      <Solution />
      <Results />
      <LeadMagnet isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
