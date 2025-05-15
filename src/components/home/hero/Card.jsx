import React, { useState, useEffect } from "react";
import './Card.css';
import { carouselData } from "./CarouselData";

const Card = () => {
  const [cards, setCards] = useState(carouselData);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prevCards => {
        const newCards = [...prevCards];
        const lastCard = newCards.pop();
        newCards.unshift(lastCard);
        return newCards;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[100%] w-[100%] pt-10 flex text-white justify-center gap-1 overflow-ellipsis">
      {cards.map((card, index) => (
        <div 
          key={card.id} 
          className={`heroCard${index + 1} relative overflow-hidden`}
        >
          <img 
            src={card.image} 
            alt={card.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-sm">Current Bid: {card.currentBid}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;