import React from "react";

function Testimonial() {
  return (
    <section id="sayings" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          What People Say About Me
        </h2>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="p-4 flex flex-col justify-between h-full">
                <p className="text-gray-500 mb-4">
                  "I have worked with Ajinkya on several Development projects,
                  and I am always impressed by his ability to create compelling
                  website content. He has a knack for storytelling and always
                  manages to capture the essence of our brand. I highly
                  recommend him."
                </p>
                <div>
                  <p className="font-bold">Faran Joshi</p>
                  <p>CEO, Opera Company</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="p-4 flex flex-col justify-between h-full">
                <p className="text-gray-500 mb-4">
                  "I was blown away by the quality of work that Ajinkya produced
                  for our website. His attention to detail and ability to write
                  engaging copy is unparalleled. We received so many compliments
                  on our website thanks to his contributions. I would definitely
                  work with him again!"
                </p>
                <div>
                  <p className="font-bold">Bharat Khanna</p>
                  <p>CTO, Guaranteed Insurance Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
