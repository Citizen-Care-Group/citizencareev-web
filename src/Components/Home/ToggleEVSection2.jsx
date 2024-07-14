import React, { useState } from "react";
import lineBackground from "../../Images/lineBackground.png";
import eclips from "../../Images/EllipseSection2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Scooter = () => {
  return <h1>scooter</h1>;
};
const Bikes = () => {
  return <h1>Bikes</h1>;
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
            className="flex justify-center group items-center gap-4 transition-all duration-200 rounded-md text-white font-bold py-4 bg-customGrey w-[15rem]"
          >
            Browse Products{" "}
            <FaArrowRightLong className=" group-hover:translate-x-4 transition-all duration-300" />{" "}
          </Link>
        </div>
      </div>
      {/* toggle ev section  */}
      <div className=" w-[40%] flex item-center flex-col">
        {/* toggler  */}
        <div className="flex items-center mx-auto w-[30%] bg-slate-100 rounded-full">
      <p 
        onClick={() => setVehicle("Scooter")} 
        className={`p-2 px-6 rounded-full cursor-pointer transition-all duration-500 ease-in-out 
                    ${vehicle === "Scooter" ? "bg-customGrey text-slate-100" : "text-customGrey bg-slate-100"}`}
      >
        Scooties
      </p>
      <p 
        onClick={() => setVehicle("Bikes")} 
        className={`p-2 px-6 rounded-full cursor-pointer transition-all duration-500 ease-in-out 
                    ${vehicle === "Bikes" ? "bg-customGrey text-slate-100" : "text-customGrey bg-slate-100"}`}
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
