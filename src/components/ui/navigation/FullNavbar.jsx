import React from "react";
import Logo from "../Logo";
import Navlinks from "./Navlinks";
import GetStarted from "../auth/GetStarted";
import Login from "../auth/Login";

const FullNavbar = ( { scrolled }) => {
  return (
    <div className={`flex justify-between mx-[8%] flex-wrap bg-primary-cream h-28 p-4 rounded-3xl  ${scrolled ? "filter drop-shadow-2xl" : ""}`}>
      <div className="flex gap-14 flex-wrap items-center">
        <Logo />
        <Navlinks />
      </div>
      <div className="flex items-center justify-between gap-8">
        <Login />
        <GetStarted />
      </div>
    </div>
  );
};

export default FullNavbar;
