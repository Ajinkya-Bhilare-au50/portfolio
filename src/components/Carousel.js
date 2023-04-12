import React from "react";

function Carousel() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-500 mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et ante nec mauris sodales convallis."
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://source.unsplash.com/random/400x400"
                    alt="Person"
                  />
                  <div>
                    <p className="font-bold text-gray-900">John Doe</p>
                    <p className="text-gray-500">CEO, ABC Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-500 mb-4">
                  "Suspendisse ornare odio a tristique eleifend. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed et ante nec
                  mauris sodales convallis."
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://source.unsplash.com/random/400x401"
                    alt="Person"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Jane Doe</p>
                    <p className="text-gray-500">CTO, XYZ Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-500 mb-4">
                  "Fusce tristique eleifend elit, non sagittis elit convallis
                  ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://source.unsplash.com/random/400x402"
                    alt="Person"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Bob Smith</p>
                    <p className="text-gray-500">COO, PQR Company</p>
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