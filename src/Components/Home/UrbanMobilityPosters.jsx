import React from "react";
import scooty from "../../Images/Scooty/scooty.png";

const UrbanMobilityPosters = () => {
  return (
    <div className=" flex flex-col w-[90%] justify-center ">
      <div className=" flex ">
        <div className=" w-[70%] flex bg-slate-700 ">
          <ul className=" list-disc">
            <li>Alloy Wheel Rims</li>
            <li>190 MM Ground Clearance</li>
            <li>Auto Repair Function</li>
          </ul>
          <img src={scooty}  className="object-cover overflow-hidden h-auto w-1/2" alt="scooty" />
        </div>
        <div className=" w-[30%] "></div>
      </div>
      <div className=" flex items-center">
        <div className=" w-[30%] "></div>
        <div className=" w-[70%]  ">
          <div className=" h-[70%]"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default UrbanMobilityPosters;
