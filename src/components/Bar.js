import React from "react";

function Bar({ skills, percentage }) {
  const percentnumber = percentage + "%";
  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">{skills}</span>
        <span className="text-xs font-semibold">{percentage}%</span>
      </div>
      <div className="overflow-hidden h-8 mt-1 bg-gray-200 rounded-full">
        <div
          className="h-full text-center pt-2 text-xs text-white font-bold bg-indigo-500"
          style={{ width: percentnumber }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
}

export default Bar;
