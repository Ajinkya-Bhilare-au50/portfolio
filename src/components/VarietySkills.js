import React, { useState } from "react";

const VarietySkills = () => {
  const [selectedButton, setSelectedButton] = useState("FullStack");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-3 mb-3">
        <button
          className={`bg-indigo-500 px-8 py-2 text-white cursor-pointer ${
            selectedButton === "FullStack" ? "bg-indigo-700" : ""
          }`}
          onClick={() => handleButtonClick("FullStack")}
        >
          FullStack
        </button>
        <button
          className={`bg-indigo-500 px-8 py-2 text-white cursor-pointer ${
            selectedButton === "Frontend" ? "bg-indigo-700" : ""
          }`}
          onClick={() => handleButtonClick("Frontend")}
        >
          Frontend
        </button>
        <button
          className={`bg-indigo-500 px-8 py-2 text-white cursor-pointer ${
            selectedButton === "Backend" ? "bg-indigo-700" : ""
          }`}
          onClick={() => handleButtonClick("Backend")}
        >
          Backend
        </button>
      </div>

      <div className="text-center">
        {selectedButton === "FullStack" && (
          <div>
            HTML, CSS, JavaScript, React-Js, BootStrap, Material-Ui, Axios,API
            design, Node-js, Express-Js, MongoDB
          </div>
        )}
        {selectedButton === "Frontend" && (
          <div>
            HTML, CSS, JavaScript, React-Js, BootStrap, Material-Ui, Axios
          </div>
        )}
        {selectedButton === "Backend" && (
          <div>API design, Node-js, Express-Js, MongoDB</div>
        )}
      </div>
    </div>
  );
};

export default VarietySkills;
