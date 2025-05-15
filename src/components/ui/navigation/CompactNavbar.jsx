import React from "react";
import GetStarted from "../auth/GetStarted";

const CompactNavbar = ({ onHamburgerClick }) => {
  return (
    <div className="cursor-pointer flex items-center justify-end my-[2%] mx-[4.5%]">
      <div>
        <GetStarted />
      </div>
      <div
        className="cursor-pointer h-9 w-9 rounded-full bg-black flex flex-col justify-between items-center gap-.5 py-3 flex-shrink-0 m-3"
        onClick={onHamburgerClick}>
        <span className="w-6 h-0.5 bg-white rounded-lg"></span>
        <span className="w-6 h-0.5 bg-white rounded-lg"></span>
        <span className="w-6 h-0.5 bg-white rounded-lg"></span>
      </div>
    </div>
  );
};

export default CompactNavbar;
