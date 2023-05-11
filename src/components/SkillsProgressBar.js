import React from "react";
import logorow from "../images/logorow.png"
function SkillsProgressBar() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center lg:text-left">
          Professional Skills
        </h2>
        <div className="flex justify-center">
          <img className="h-full" src={logorow} alt="" />
        </div>
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
        {/* skill2 */}
        <div className="my-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">CSS</span>
            <span className="text-xs font-semibold">85%</span>
          </div>
          <div className="overflow-hidden h-8 mt-1 bg-gray-200 rounded-full">
            <div
              className="h-full text-center pt-2 text-xs text-white font-bold bg-indigo-500"
              style={{ width: `85%` }}
            >
              85%
            </div>
          </div>
        </div>
        {/* skill3 */}
        <div className="my-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">JavaScript</span>
            <span className="text-xs font-semibold">90%</span>
          </div>
          <div className="overflow-hidden h-8 mt-1 bg-gray-200 rounded-full">
            <div
              className="h-full text-center pt-2 text-xs text-white font-bold bg-indigo-500"
              style={{ width: `90%` }}
            >
              90%
            </div>
          </div>
        </div>
        {/* skill4 */}
        <div className="my-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">React-Js</span>
            <span className="text-xs font-semibold">90%</span>
          </div>
          <div className="overflow-hidden h-8 mt-1 bg-gray-200 rounded-full">
            <div
              className="h-full text-center pt-2 text-xs text-white font-bold bg-indigo-500"
              style={{ width: `90%` }}
            >
              90%
            </div>
          </div>
        </div>
        {/* skill5 */}
        <div className="my-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Tailwind CSS</span>
            <span className="text-xs font-semibold">88%</span>
          </div>
          <div className="overflow-hidden h-8 mt-1 bg-gray-200 rounded-full">
            <div
              className="h-full text-center pt-2 text-xs text-white font-bold bg-indigo-500"
              style={{ width: `88%` }}
            >
              88%
            </div>
          </div>
        </div>
        {/* skill6 */}
        <div className="my-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Material UI</span>
            <span className="text-xs font-semibold">88%</span>
          </div>
          <div className="overflow-hidden h-8 mt-1 bg-gray-200 rounded-full">
            <div
              className="h-full text-center pt-2 text-xs text-white font-bold bg-indigo-500"
              style={{ width: `88%` }}
            >
              88%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsProgressBar;
