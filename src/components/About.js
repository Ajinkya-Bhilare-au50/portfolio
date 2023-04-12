import React from "react";

function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10">About Us</h2>
        <p className="text-gray-500 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante
          nec mauris sodales convallis. Fusce tristique eleifend elit, non
          sagittis elit convallis ac. Suspendisse ornare odio a tristique
          eleifend.
        </p>
        <a
          alt="h"
          href="/"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

export default About;
