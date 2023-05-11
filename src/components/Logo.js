import React from "react";
import  BrandIcon  from "../images/logoab.png";



export default function Logo() {
  return (
    <div>
          <img className="w-20" style={{ filter: "drop-shadow(1rem 1rem 1rem purple)" }} src={BrandIcon} alt="" />
    </div>
  );
}

