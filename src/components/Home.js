import React, { Suspense} from "react";
import { Parallax } from "react-parallax";
import ajinkya from "../images/Ajinkya2b.png";

import Socialicons from "./Socialicons";
import logorow from "../images/logorow.png";
import ultra from "../images/ultra.jpg"
function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Parallax bgImage={ultra} strength={280}>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="flex justify-center ">
            <img
              className="bg-transparent rounded-full border-4 border-indigo-50 p-1"
              src={ajinkya}
              alt=""
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg  text-indigo-50 tracking-wide uppercase p-3 font-bold">
              Welcome to my
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-indigo-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Portfolio
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-indigo-200 ">
              My name is <strong>Ajinkya Bhilare</strong> & <br />
              I'm a <strong>Fullstack Web-Developer.</strong>
              <div>
                I'm specialized in MERN stack and I'm passionate about building
                Scalable websites.
              </div>
              <Socialicons />
              <div
                className="hover:scale-125"
                style={{
                  background: "",
                }}
              >
                <img
                  className="h-full  hover:scale-100"
                  src={logorow}
                  alt=""
                  style={{
                    width: "100%",
                    filter: "drop-shadow(8px 5px 3px rgba(0, 0, 0, 0.4))",
                    transition: "transform 0.2s ease-in-out",
                  }}
                />
              </div>
            </p>
          </div>
        </div>
      </Parallax>
    </Suspense>
  );
}

export default Home;
