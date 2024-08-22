import "./App.css";
import Header from "./components/Header.jsx";
import Modal from "./components/Modal.jsx";
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
      <Header toggleModal={toggleModal} />
      <Problem />
      <Solution />
      <Results />
      <Modal isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
