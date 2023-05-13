import { useState } from "react";
import CrossSvg from "./CrossSvg";
import { AiFillCaretDown } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

export default function ShowHideDiv() {
  const [showDiv, setShowDiv] = useState(true);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  const closeDiv = () => {
    setShowDiv(false);
  };

  return (
    <div>
      <button onClick={toggleDiv}>
        <AiFillCaretDown />
      </button>
      {showDiv && (
        <div className="bg-purple-300 flex justify-between h-8 items-center px-4 hover:font-bold">
          <span></span>
          <a
            className="hover:font-bold"
            href="https://github.com/Ajinkya-Bhilare-au50"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit <FiGithub className="inline hover:font-bold" />
            &nbsp;Github Repository
          </a>
          <span onClick={closeDiv} style={{ cursor: "pointer" }}>
            <CrossSvg className="order-1" />
          </span>
        </div>
      )}
    </div>
  );
}
