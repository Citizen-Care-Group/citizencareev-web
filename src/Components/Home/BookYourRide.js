import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BookYourRide = () => {
  return (
    <div className=" w-full flex justify-center bg-customGreen py-4">
      <div className="flex justify-between w-[90%]">
        <h1 className=" text-white text-2xl font-bold">Book Your Test Ride! Its Free.</h1>
        <button className="flex bg-white rounded-md px-6 py-2 gap-2 group text-black  justify-center items-center">
          <span>Test Ride </span> <FaArrowRight className=" group-hover:translate-x-4 transition-all duration-200" />{" "}
        </button>
      </div>
    </div>
  );
};

export default BookYourRide;
