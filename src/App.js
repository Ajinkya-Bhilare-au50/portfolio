import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import "./index.css";
import SkillsProgressBar from "./components/SkillsProgressBar";

function App() {
  return (
    <div className="p-10">
      <Navbar />
      <Home />
      <About />
      <Carousel />
      <Project />
      <div className="w-96">
        <SkillsProgressBar skill={"html"} percent={"60"} />
        <SkillsProgressBar skill={"CSS"} percent={"90"} />
      </div>
      <Testimonial />
    </div>
  );
}

export default App;
