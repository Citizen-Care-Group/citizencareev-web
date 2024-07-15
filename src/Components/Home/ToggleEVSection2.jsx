import React, { useState } from "react";

import lineBackground from "../../Images/lineBackground.png";
import eclips from "../../Images/EllipseSection2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Scooter = () => {
  const cards = [
    {
      title: "Card 1",
      content: "This is the content of card 1.",
    },
    {
      title: "Card 2",
      content: "This is the content of card 2.",
    },
    {
      title: "Card 3",
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
const Bikes = () => {
  const cards = [
    {
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


const ToggleEVSection2 = () => {
  const [vehicle, setVehicle] = useState("Scooter");
  return (
    <div className=" flex flex-col lg:flex-row my-4">
      {/* line background section  */}
      <div
        style={{ backgroundImage: `url(${lineBackground})` }}
        className={` w-[60%] relative bg-cover bg-no-repeat `}
      >
        <img
          className=" w-[90vw] mx-auto  lg:w-[30vw] p-4"
          src={eclips}
          alt=""
        />
        <div className=" flex items-center justify-center flex-col gap-4  absolute left-[14rem] top-[11rem]">
          <h1 className="  text-4xl font-bold w-[60%] ">
            Electrify your life with{" "}
            <span className=" text-customGreen"> Citizen EV!</span>
          </h1>
          <Link
            to="/"
            className="flex justify-center group items-center gap-4 transition-all duration-200 rounded-md text-white font-bold py-4 bg-customGrey hover:bg-slate-800 w-[15rem]"
          >
            Browse Products{" "}
            <FaArrowRightLong className=" group-hover:translate-x-4 transition-all duration-300" />{" "}
          </Link>
        </div>
      </div>
      {/* toggle ev section  */}
      <div className=" w-[35%] flex item-center flex-col">
        {/* toggler  */}
        <div className="flex items-center mx-auto w-[30%] bg-slate-100 rounded-full">
          <p
            onClick={() => setVehicle("Scooter")}
            className={`p-2 px-6 rounded-full cursor-pointer transition-all duration-500 ease-in-out 
                    ${
                      vehicle === "Scooter"
                        ? "bg-customGrey text-slate-100"
                        : "text-customGrey bg-slate-100"
                    }`}
          >
            Scooties
          </p>
          <p
            onClick={() => setVehicle("Bikes")}
            className={`p-2 px-6 rounded-full cursor-pointer transition-all duration-500 ease-in-out 
                    ${
                      vehicle === "Bikes"
                        ? "bg-customGrey text-slate-100"
                        : "text-customGrey bg-slate-100"
                    }`}
          >
            Bikes
          </p>
        </div>
        {vehicle === "Scooter" ? <Scooter /> : <Bikes />}
      </div>
    </div>
  );
};

export default ToggleEVSection2;
