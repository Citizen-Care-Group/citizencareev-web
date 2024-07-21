import React, { useState } from "react";


const Bikes = () => {
    const cards = [
      {
        pic: scooty,
        title: "Bike Card 1",
        content: "This is the content of card 1.",
      },
      {
        title: "Bike Card 2",
        content: "This is the content of card 2.",
      },
      {
        title: "Bike Card 3",
        content: "This is the content of card 3.",
      },
    ];
  
    const [currentCard, setCurrentCard] = useState(0);
  
    const nextCard = () => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    };
  
    const prevCard = () => {
      setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
    };
  
    return (
      <div className="max-w-md mx-auto mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform">
          <img
            className="text-xl font-bold mb-4"
            alt=" current pic"
            src={cards[currentCard].pic}
          />
  
          <h2 className="text-xl font-bold mb-4">{cards[currentCard].title}</h2>
          <p className="text-gray-700">{cards[currentCard].content}</p>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={prevCard}
            className="bg-customGreen text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Previous
          </button>
          <button
            onClick={nextCard}
            className="bg-customGreen text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    );
};
  
export default Bikes;