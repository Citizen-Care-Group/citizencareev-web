import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const StoreCardScroller = ({ cards }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNextClick = () => {
    if (startIndex < cards.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className=" w-full flex items-center justify-around">
      <button
        onClick={handlePrevClick}
        disabled={startIndex === 0}
        className="mr-2  text-white px-4 py-2 rounded disabled:opacity-50"
      >
        <FaArrowLeft />
      </button>
      <div className="flex justify-center overflow-x-hidden space-x-4 w-full md:w-2/3 lg:w-full">
        {cards.slice(startIndex, startIndex + 3).map((card, index) => (
          <div
            key={index}
            className="flex-none w-64 h-64 m-2 p-4 bg-white shadow rounded"
          >
            {card}
          </div>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        disabled={startIndex >= cards.length - 3}
        className="ml-2  text-white px-4 py-2 rounded disabled:opacity-50"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default StoreCardScroller;
