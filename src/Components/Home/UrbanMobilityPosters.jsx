import React from "react";
import scooty from "../../Images/Scooty/scooty.png";
import DarkGradient from "../../Images/UrbanMobility/DarkGradient.png";
import bgGradientColoured from '../../Images/UrbanMobility/bgGradientColoured.png';
import BGBlack from '../../Images/UrbanMobility/BGBlack.png';

const UrbanMobilityPosters = () => {
  return (
    <div className=" w-full bg-slate-200 flex py-8 flex-col items-center justify-center">
      <div className=" flex flex-col gap-7  w-[90%]">
        <div className=" flex gap-7 justify-center ">
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
          </div>
        </div>
        <div className=" flex gap-7 justify-center ">
          <div
            style={{ backgroundImage: `url(${BGBlack})` }}
            className=" bg-no-repeat bg-cover rounded-md w-[30%] "
          ></div>
          <div style={{backgroundImage:`url(${bgGradientColoured})`}} className=" w-[60%] h-[40vh] overflow-hidden relative flex bg-customGray2 rounded-md ">
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
        </div>
      </div>
    </div>
  );
};

export default UrbanMobilityPosters;
