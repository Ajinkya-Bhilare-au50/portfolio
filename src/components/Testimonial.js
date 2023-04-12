import React from "react";

function Testimonial() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10">What People Say About Us</h2>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-500">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et ante nec mauris sodales convallis. Suspendisse ornare odio
                  a tristique eleifend."
                </p>
              </div>
              <div className="p-4 bg-gray-100">
                <p className="font-bold">John Doe</p>
                <p>CEO, ABC Company</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-500">
                  "Fusce tristique eleifend elit, non sagittis elit convallis
                  ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                </p>
              </div>
              <div className="p-4 bg-gray-100">
                <p className="font-bold">Jane Smith</p>
                <p>CTO, XYZ Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
