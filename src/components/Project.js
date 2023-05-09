import React from "react";
import twitter from "../images/twitter.png";
import stackoverflow from "../images/stackoverflow.png";
function Project() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10">My Projects</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full" src={twitter} alt="Project" />
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  TWITTER-The Social Networking App
                </h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et ante nec mauris sodales convallis.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full" src={stackoverflow} alt="Project" />
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  Stack Overflow-Code Sharing Platform
                </h3>
                <p className="text-gray-500">
                  Suspendisse ornare odio a tristique eleifend. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed et ante nec
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full"
                src="https://source.unsplash.com/random/402x402"
                alt="Project"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  Ecommerce-Retail Shopping Website
                </h3>
                <p className="text-gray-500">
                  Fusce tristique eleifend elit, non sagittis elit convallis ac.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
