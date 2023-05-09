import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import "./index.css";
import SkillsProgressBar from "./components/SkillsProgressBar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="p-10 flex-wrap max-w-fit">
      <Navbar />
      <Home />
      <About />
      <Carousel />
      <Project />
      <SkillsProgressBar />
      <Testimonial />
      <ScrollToTopButton />
      <ContactUs/>
      
    </div>
  );
}

export default App;
