import React from "react";

function SkillsProgressBar(props) {
  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">{props.skill}</span>
        <span className="text-xs font-semibold">{props.percent}%</span>
      </div>
      <div className="overflow-hidden h-4 mt-1 bg-gray-200 rounded-full">
        <div
          className="h-full text-center text-xs text-white font-bold bg-indigo-500"
          style={{ width: `${props.percent}%` }}
        >
          {props.percent}%
        </div>
      </div>
    </div>
  );
}

export default SkillsProgressBar;
