
import React from "react";
import { FaEnvelope, FaPhone} from "react-icons/fa";

import Socialicons from "./Socialicons";


const Footer = () => {
  return (
    <section className="bg-gray-900 text-gray-300 py-8 mt-5">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-8 items-center">
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-bold mb-4 text-gray-400">Get in touch</h3>
          <div className="flex flex-row items-center mb-4">
            <FaEnvelope className="mr-2 text-gray-500" />
            <a href="mailto:Ajinkya0011@gmail.com" className="text-gray-500">
              Ajinkya0011@gmail.com
            </a>
          </div>
          <div className="flex flex-row items-center mb-4">
            <FaPhone className="mr-2 text-gray-500" />
            <a href="tel:8082451323" className="text-gray-500">
              8082451323
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-end">
          <nav className="flex flex-col lg:flex-row"></nav>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-bold">
            &copy; {new Date().getFullYear()} Domain. All rights reserved.
          </p>
        </div>
        <Socialicons />
      </div>
    </section>
  );
};

export default Footer;

