import { useState } from "react";
import scooty from "../../Images/Scooty/scooty.png";
import { MdCurrencyRupee } from "react-icons/md";

const Savings = ({img, name, monthlySaving, annualSaving}) => {
  const [distance, setDistance] = useState(50);

  const handleSliderChange = (e) => {
    setDistance(e.target.value);
  };

  const monthlySavings = Math.round((distance / 50) * 3528);
  const annualSavings = Math.round(monthlySavings * 12);

  return (
    <>
    <div className="md:flex max-w-7xl mx-auto lg:flex items-center p-6 md:h[40vh] justify-between">
      {/* Slider */}
      <div className="w-full sm:order-2 lg:order-1 md:order-1 max-w-md">
        <div className="flex justify-between mb-2 text-lg">
          <span>Daily Distance: {distance}km</span>
        </div>

        <div className="relative w-full">
          <input
            type="range"
            min="15"
            max="100"
            value={distance}
            onChange={handleSliderChange}
            className="absolute w-full h-12 opacity-0 cursor-pointer"
            style={{ zIndex: 20 }}
          />
          <div
            className="absolute h-6 bg-green-400 rounded-md"
            style={{
              width: `${((distance - 15) / (100 - 15)) * 100}%`,
              zIndex: 2,
            }}
          />
          <div
            className="absolute w-full h-6 bg-gray-300 rounded-md"
            style={{ zIndex: 1 }}
          />
          <div
            className="absolute h-8 w-8 bg-white border border-gray-400 rounded-full cursor-pointer"
            style={{
              left: `calc(${((distance - 15) / (100 - 15)) * 100}% - 18px)`,
              top: "-4px",
              zIndex: 4,
            }}
          />
        </div>

        <div className="flex justify-between mt-8">
          <span>15km</span>
          <span>100km</span>
        </div>

        <div className="flex justify-between mt-4 text-lg font-semibold">
          <div>
            <span className="text-sm lg:text-lg font-sans">
              Monthly Savings
            </span>
            <div className="text-green-400 text-md lg:text-lg">
              ₹{monthlySavings}
            </div>
          </div>
          <div>
            <span className="text-sm lg:text-lg">Annual Savings</span>
            <div className="text-green-400 text-md lg:text-lg">
              ₹{annualSavings}
            </div>
          </div>
        </div>
      </div>
      {/* Scooty image */}
      <div className="sm:order-1 lg:order-2 md:order-2">
        <img
          src={scooty}
          height={400}
          width={400}
          className="w-30 h-30"
          alt=""
        />
        <div className="bg-red-700 w-full"></div>
      </div>

      {/* order mrp */}
      
    </div>

    {/* Need to be responsive */}
    <hr className="w-[95%] mx-auto order-3"/>
    <div className="lg:flex md:flex -mt-2 max-w-7xl mx-auto order-4 mb-8 items-center p-2 justify-between">
      <div className="flex sm:text-sm justify-evenly p-4 sm:w-[50%] lg:w-[25%]">
        <p>Ex-showroom MRP </p>
        <p className="">=</p>
        <p className="flex text-green-400">
          <MdCurrencyRupee size={25} className="" />
          1,22,000
        </p>
      </div>
      <div className="flex sm:text-sm justify-evenly p-4 sm:w-[40%] lg:w-[20%]">
        <p>Effective cost</p>
        <p className="">=</p>
        <p className="flex text-green-400">
          <MdCurrencyRupee size={25} className="" />
          1,22,000
        </p>
      </div>
    </div>
    </>
  );
};

export default Savings;
