import React from "react";
import logorow from "../images/logorow.png";
import VarietySkills from "./VarietySkills";
import Bar from "./Bar";
function SkillsProgressBar() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center lg:text-left">
          Professional Skills
        </h2>
        <VarietySkills />
        <div className="flex justify-center">
          <img className="h-full" src={logorow} alt="" />
        </div>

        <Bar skills={"HTML"} percentage={92} />
        <Bar skills={"CSS"} percentage={91} />
        <Bar skills={"Javascript"} percentage={96} />
        <Bar skills={"Tailwind-CSS"} percentage={92.5} />
        <Bar skills={"Node-Js"} percentage={96} />
        <Bar skills={"Express-Js"} percentage={93} />
        <Bar skills={"MongoDB"} percentage={90} />
        <Bar skills={"GIT"} percentage={92} />
        <Bar skills={"Material-UI"} percentage={91} />
        <Bar skills={"React-JS"} percentage={90} />
      </div>
    </section>
  );
}

export default SkillsProgressBar;
