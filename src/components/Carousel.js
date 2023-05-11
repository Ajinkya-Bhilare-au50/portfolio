import React from "react";
import smita from "../images/smita.jpg";
import sujit from "../images/sujit.jpg";
import jayesh from "../images/jayesh.jpg";
function Carousel() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center lg:text-left">
          Testimonials
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-500 mb-4  line-clamp-4">
                  I have worked with Ajinkya on several Development projects,
                  and I am always impressed by his ability to create compelling
                  website content. He has a knack for storytelling and always
                  manages to capture the essence of our brand. recommended
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={jayesh}
                    alt="Person"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Jayesh Parikh</p>
                    <p className="text-gray-500">CEO, Piping Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-500 mb-4 line-clamp-4">
                  "I was in a time crunch and needed content for my website
                  ASAP. Ajinkya came through for me and delivered exactly what I
                  needed, on time and on budget. His web-design is top-notch and
                  he was a pleasure to work with. I would definitely hire him
                  again!"
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={smita}
                    alt="Person"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Smita Chaudhary</p>
                    <p className="text-gray-500">CTO, Blue Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-500 mb-4 line-clamp-4">
                  I have worked with Ajinkya on several Development projects,
                  and I am always impressed by his ability to create compelling
                  website content. he always manages the essence of our brand.
                  Highly recommended
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={sujit}
                    alt="Person"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Sujit Patel</p>
                    <p className="text-gray-500">COO, MT associates Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Carousel;
