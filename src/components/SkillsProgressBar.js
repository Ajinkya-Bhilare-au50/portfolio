import React from "react";

function SkillsProgressBar() {
  return (
    <section id="skills"  className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10">Professional Skills</h2>
        {/* skill1 */}
        <div className="my-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">HTML</span>
            <span className="text-xs font-semibold">80%</span>
          </div>
          <div className="overflow-hidden h-8 mt-1 bg-gray-200 rounded-full">
            <div
              className="h-full text-center pt-2 text-xs text-white font-bold bg-indigo-500"
              style={{ width: `80%` }}
            >
              80%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsProgressBar;
