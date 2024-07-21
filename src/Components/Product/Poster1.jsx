// eslint-disable-next-line
import React, { useState } from "react";
import scooty from "../../Images/Scooty/scooty.png";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";
import { BiArrowToRight } from "react-icons/bi";

const Poster1 = () => {
  // const [value, setValue] = useState(50);

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <div className=" flex bg-black py-8 flex-col justify-center items-center w-full">
      <div className=" w-[90%]">
        {/* price filter and Image  section  */}
        <div className=" w-full flex  flex-col lg:flex-row items-start justify-around ">
          {/* headers  */}
          <div className=" w-full text-white lg:w-[45%] flex gap-8 flex-col">
            <div className="flex gap-5 items-center">
              <img src={Logo} width={100} alt="ccg" />
              <p>Scooties & Bikes</p>
            </div>
            <div className="flex flex-col gap-2 justify-around ">
              <h1 className=" text-4xl">Up to 10% off</h1>
              <h1 className=" text-4xl">Use Code EV10</h1>
            </div>

            <Link className=" flex w-[7rem] pb-2 items-center gap-2 border-b">
             <p>Shop Now</p>  <BiArrowToRight />{" "}
            </Link>
          </div>
          {/* image  */}
          <div className=" flex justify-center items-center w-full lg:w-[50%]">
            <img src={scooty} alt="scooty" className=" " />
          </div>
        </div>
        {/* banner slider section  */}
      </div>
    </div>
  );
};

export default Poster1;
