import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Newsletter from "./components/Newsletter.jsx";
import InitialSocialProof from "./components/InitialSocialProof.jsx";
import Problem from "./components/Problem.jsx";
import Solution from "./components/Solution.jsx";
import Process from "./components/Process.jsx";
import Results from "./components/Results.jsx";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions.jsx";
import FinalCta from "./components/FinalCta.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />
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
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
