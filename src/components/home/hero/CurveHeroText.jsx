import React from "react";

const CurveHeroText = ({ text = "MOST BIDDED AUCTION" }) => {
  return (
    <div className="w-full flex justify-center items-center relative h-[160px] md:h-[140px] lg:h-[200px]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1650 300"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible" }}>
        <defs>
          {/* Arc path adjusted to be shallower and lower to reduce white space */}
          <path id="ellipsePath" d="M 0,400 A 700,150 0 0,1 1650,420" />
        </defs>
        <text
          fill="black"
          filter="drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.5))"
          fontSize="150"
          fontWeight="800"
          letterSpacing="3"
          textLength="1650"
          lengthAdjust="spacing">
          <textPath href="#ellipsePath" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurveHeroText;

