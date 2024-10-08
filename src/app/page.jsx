import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Newsletter from "./components/Newsletter.jsx";
import InitialSocialProof from "./components/InitialSocialProof.jsx";
import Problem from "./components/Problem.jsx";
import Solution from "./components/Solution.jsx";
import Process from "./components/Process.jsx";
import Results from "./components/Results.jsx";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="bg-color-body">
        <Newsletter />
        <InitialSocialProof />
        <Problem />
        <Solution />
        <Process />
        <Results />
        <FrequentlyAskedQuestions />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
