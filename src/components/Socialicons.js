import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
//
const Socialicons = () => {
  return (
    <div className="flex gap-2 justify-center px-2   items-center h-20">
      <div className="bg-gray-300  hover:bg-black hover:cursor-pointer hover:text-pink-100">
        <a
          href="https://www.linkedin.com/in/ajinkya-bhilare"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinFill className="cursor-pointer box-content p-4 text-gray-600 hover:text-pink-100" />
        </a>
      </div>
      <div className="bg-gray-300  hover:bg-black hover:cursor-pointer hover:text-pink-100">
        <FaFacebookF className="cursor-pointer box-content p-4 text-gray-600 hover:text-pink-100" />
      </div>
      <div className="bg-gray-300  hover:bg-black hover:cursor-pointer hover:text-pink-100">
        <FaTwitter className="cursor-pointer box-content p-4 text-gray-600 hover:text-pink-100" />
      </div>
      <div className="bg-gray-300  hover:bg-black hover:cursor-pointer hover:text-pink-100">
        <FaTelegramPlane className="cursor-pointer box-content p-4 text-gray-600 hover:text-pink-100" />
      </div>
      <div className="bg-gray-300  hover:bg-black hover:cursor-pointer hover:text-pink-100">
        <RiInstagramFill className="cursor-pointer box-content p-4 text-gray-600 hover:text-pink-100" />
      </div>
      <div className="bg-gray-300  hover:bg-black hover:cursor-pointer hover:text-pink-100">
        <a
          href="https://github.com/Ajinkya-Bhilare-au50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="cursor-pointer box-content p-4 text-gray-600 hover:text-pink-100" />
        </a>
      </div>
    </div>
  );
};

export default Socialicons;
