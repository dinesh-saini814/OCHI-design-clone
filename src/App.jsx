import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="w-full min-h-screen text-white bg-background">
      <Navbar />
      <LandingPage />
      <Marquee />
      <Introduction />
    </div>
  );
}

export default App;
