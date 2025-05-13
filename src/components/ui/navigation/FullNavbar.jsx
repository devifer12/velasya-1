import React from "react";
import Logo from "../Logo";
import Navlinks from "./Navlinks";
import GetStarted from "../auth/GetStarted";
import Login from "../auth/Login";

const FullNavbar = () => {
  return (
    <div className="flex justify-between mx-28 bg-white h-28 p-4 rounded-full">
      <div className="flex gap-14 items-center">
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
