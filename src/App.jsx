import "./App.css";
import Header from "./components/Header.jsx";
import Modal from "./components/Modal.jsx";
import Problem from "./components/Problem.jsx";
import Results from "./components/Results.jsx";
import Solution from "./components/Solution.jsx";
function App() {
  return (
    <div>
      <Header />
      <Problem />
      <Solution />
      <Results />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
