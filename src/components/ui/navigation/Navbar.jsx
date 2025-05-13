import React, { useEffect, useState } from "react";
import FullNavbar from "./FullNavbar";
import CompactNavbar from "./CompactNavbar";

const Navbar = () => {
  const [showFullNavbar, setShowFullNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [forceShowFullNavbar, setForceShowFullNavbar] = useState();

  const handleHamburgerClick = () => {
    setForceShowFullNavbar(true);
    setShowFullNavbar(true);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (forceShowFullNavbar){
        setForceShowFullNavbar(false);
        setLastScrollY(currentScrollY);
        return;
    }

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        //scrolling down
        setShowFullNavbar(false);
      } else {
        //scrolling up
        setShowFullNavbar(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className={`transition-transorm duration-500 ease-in-out ${
          showFullNavbar ? "translate-y-14" : "-translate-y-full"
        }`}>
        <FullNavbar />
      </div>

      <div
        className={`transition-transorm duration-500 ease-in-out absolute top-0 right-0 w-full ${
          showFullNavbar ? "translate-x-full" : "translate-x-0"
        }`}>
        <CompactNavbar onHamburgerClick={handleHamburgerClick} />
      </div>
    </div>
  );
};

export default Navbar;
