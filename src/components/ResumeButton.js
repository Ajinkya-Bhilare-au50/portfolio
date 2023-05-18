import React from "react";
import { BsDownload } from "react-icons/bs";
const ResumeButton = () => {
  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/uc?export=download&id=1Ce3KZWfuDI5-SqmjqqDabxQ4mv3jiuHb";

    window.location.href = resumeUrl;
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex gap-1 items-center"
      onClick={handleDownload}
    >
      <BsDownload /> Download Resume
    </button>
  );
};

export default ResumeButton;
