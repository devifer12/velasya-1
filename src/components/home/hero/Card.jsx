import React, { useState, useEffect } from "react";
import './Card.css';
import { carouselData } from "./CarouselData";

const Card = () => {
  const [positions, setPositions] = useState([1, 2, 3, 4, 5]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setPositions(prev => {
          const newPositions = [...prev];
          const last = newPositions.pop();
          newPositions.unshift(last);
          return newPositions;
        });

        setTimeout(() => {
          setIsAnimating(false);
        }, 1200);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="h-[90%] w-[100%] pt-11 flex text-white justify-center relative">
      {carouselData.map((card, index) => (
        <div
          key={card.id}
          className={`heroCard position-${positions[index]}`}
          style={{
            willChange: 'transform, opacity',
            transformStyle: 'preserve-3d',
          }}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover rounded-[6%]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-[6%]">
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-sm">Current Bid: {card.currentBid}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;