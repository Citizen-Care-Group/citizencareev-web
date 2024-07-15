import React from "react";
import scooty from "../../Images/Scooty/scooty.png";
import DarkGradient from "../../Images/UrbanMobility/DarkGradient.png";

const UrbanMobilityPosters = () => {
  return (
    <div
      className=" w-full bg-slate-200 flex py-8 flex-col items-center justify-center"
    >
      <div className="   w-[90%]">
        <div className=" flex justify-around ">
          <div className=" w-[60%] h-[40vh] overflow-hidden relative flex bg-customGray2 rounded-md ">
            <ul className=" flex flex-col items-center justify-center text-white text-lg font-bold list-disc mx-auto">
              <li>Alloy Wheel Rims</li>
              <li>190 MM Ground Clearance</li>
              <li>Auto Repair Function</li>
            </ul>
            <img
              src={scooty}
              className="object-cover absolute -right-[10rem] -top-[10rem] overflow-hidden h-auto w-[60%] "
              alt="scooty"
            />
          </div>
          <div
            style={{ backgroundImage: `url(${DarkGradient})` }}
            className=" bg-no-repeat bg-cover rounded-md w-[30%] "
          >
            hwllo
          </div>
        </div>
        <div className=" flex items-center">
          <div className=" w-[30%] "></div>
          <div className=" w-[70%]  ">
            <div className=" h-[70%]"></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrbanMobilityPosters;
