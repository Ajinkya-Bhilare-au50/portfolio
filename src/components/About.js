import React from "react";
// 
function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center lg:text-left">About Me</h2>
        <p className="text-gray-500 mb-10">
          I'm committed to create high-quality, user-focused solutions that meet
          my clients' needs. Whether I'm working on a small website or a
          large-scale application, I always strive for excellence and attention
          to detail.<br></br>Take a look around my portfolio to see some of my past work
          and get a sense of what I can do. If you're interested in working
          together, please don't hesitate to get in touch!
        </p>
        
        <a
          alt="h"
          href="#sayings"
          className="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-700"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
// learn
export default About;
