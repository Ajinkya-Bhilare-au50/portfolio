import React from "react";
import { Parallax } from "react-parallax";
import ajinkya from "../images/Ajinkya2b.png";
import imgwa from "../images/paralaximage.png";
function Home() {
  return (
    <Parallax bgImage={imgwa} strength={280}>
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
          <h2 className="text-lg  text-white-600 tracking-wide uppercase p-3 font-bold">
            Welcome to my
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Portfolio
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-White-100">
            My name is <strong>Ajinkya Bhilare</strong> & <br />
            I'm a <strong>Fullstack Web-Developer.</strong>
            <div>
              I'm specialized in MERN stack and I'm passionate about building
              Scalable websites.
            </div>
          </p>
        </div>
      </div>
    </Parallax>
  );
}

export default Home;
