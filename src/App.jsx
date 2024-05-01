import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Introduction from "./components/Introduction";
import PlayEyes from "./components/PlayEyes";
import Projects from "./components/Projects";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="w-full min-h-screen text-white bg-background">
      <Navbar />
      <LandingPage />
      <Marquee />
      <Introduction />
      <PlayEyes />
      <Projects />
      <Cards />
    </div>
  );
}

export default App;
