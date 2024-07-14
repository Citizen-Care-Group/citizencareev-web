import React from "react";
import lineBackground from "../../Images/lineBackground.png";
import eclips from "../../Images/EllipseSection2.png";

const Scooter = () => {
  return <h1>scooter</h1>;
};
const Bikes = () => {
  return <h1>Bikes</h1>;
};

const ToggleEVSection2 = () => {
  return (
    <div className=" flex flex-col lg:flex-row">
      {/* line background section  */}
      <div
        style={{ backgroundImage: `url(${lineBackground})` }}
        className={` relative `}
      >
        <img className=" w-[90vw] lg:w-[30vw] p-16" src={eclips} alt="" />
        <div className=" flex items-center justify-center absolute top-[13rem]">
          <h1 className="  text-4xl font-bold w-[60%] ">
            Electrify your life with{" "}
            <span className=" text-customGreen"> Citizen EV!</span>
          </h1>
        </div>
      </div>
      {/* toggle ev section  */}
      <div>
        <Scooter/>
        <Bikes/>
      </div>
    </div>
  );
};

export default ToggleEVSection2;
