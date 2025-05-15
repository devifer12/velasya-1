import React from "react";
import './Card.css'

const Card = () => {
  return (
    <div className="h-[100%] w-[100%] pt-10 flex text-white justify-center gap-1 overflow-hidden">
      <div className="heroCard1"></div>
      <div className="heroCard2"></div>
      <div className="heroCard3"></div>
      <div className="heroCard4"></div>
      <div className="heroCard5"></div>
    </div>
  );
};

export default Card;
