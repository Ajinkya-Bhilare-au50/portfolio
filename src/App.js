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

import Slider2 from "./components/Slider2";
import ShowHideDiv from "./components/ShowHideDiv";
import Footer from "./components/Footer";

function App() {
  return ( 
      <div className="p-5 sm:flex-wrap md:flex-wrap lg:flex-wrap  max-w-full lg:p-12">
        <ShowHideDiv />
        <Navbar />
        <Home />
        <About />
        <Carousel />
        <Project />
        <SkillsProgressBar />
        <Testimonial />
        <Slider2 />
        <ScrollToTopButton />
        <ContactUs />
        <Footer />
      </div>
    
  );
}

export default App;
