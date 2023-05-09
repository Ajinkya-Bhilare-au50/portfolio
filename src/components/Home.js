import React from "react";
import ajinkya from "../images/Ajinkya2b.png";
function Home() {
  return (
    <div className="bg-gray-50 flex ">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex justify-center ">
          <img
            className="bg-transparent rounded-full border-4 border-indigo-500 p-1"
            src={ajinkya}
            alt=""
            style={{ height: "250px" }}
          />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold text-indigo-600 tracking-wide uppercase p-3">
            Welcome to my
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Portfolio
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            My name is <strong>Ajinkya Bhilare</strong> & <br />
            I'm a{" "}
            <strong>Fullstack Web-Developer.</strong>
            <div>
              I'm specialized in MERN stack and I'm passionate about building
              Scalable websites.
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
