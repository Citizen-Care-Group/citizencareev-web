import React, { useState } from "react";

const UnmatchedSavingSection = () => {
    const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className=" flex flex-col justify-center items-center w-full">
      <div className=" w-[90%]">
        {/* price filter and Image  section  */}
        <div className=" flex border-b border-slate-400 my-6 flex-col w-[50%] items-start justify-center lg:flex-row">
          {/* filter  */}
          <div className="  w-[80%] flex gap-8 flex-col">
            <div className=" flex flex-col items-start">
              <h1 className=" text-lg text-black font-bold">
                Unmatched Savings
              </h1>
              <p className=" text-slate-400">
                Invest in an EV, reap the returns!
              </p>
            </div>
            <div className=" w-full">
              <p className=" text-start text-sm text-slate-400">
                Daily Distance: 50km
              </p>
              <input
               type="range"
               className="custom-range"
               min="0"
               max="100"
               value={value}
               onChange={handleChange}
               style={{ '--slider-value': `${value}%` }}
              />
              <div className=" flex gap-[5rem] justify-between">
                <div className=" flex flex-col items-start">
                  <p className=" text-start text-sm text-slate-400">15km</p>
                  <p className=" text-start text-sm text-slate-400">
                    Monthly Saving
                  </p>
                  <p className=" font-bold text-lg text-customGreen">3,528</p>
                </div>
                <div className="  flex flex-col items-end">
                  <p className=" text-start text-sm text-slate-400">10km</p>
                  <p className=" text-start text-sm text-slate-400">
                    Annual Saving
                  </p>
                  <p className=" font-bold text-lg text-customGreen">42,336</p>
                </div>
              </div>
            </div>
          </div>
          {/* image  */}
          <div></div>
        </div>
        {/* bannder slider section  */}
        <div></div>
      </div>
    </div>
  );
};

export default UnmatchedSavingSection;
