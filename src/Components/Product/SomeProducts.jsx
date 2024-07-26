import React, { useEffect, useState } from "react";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
import { Link } from "react-router-dom";
import FAQ from "../Common/FAQ";
import { MdCurrencyRupee } from "react-icons/md";
import Savings from "./Savings";

const { GET_PRODUCTS } = endpoints;

const ProductCard = ({ productDetails }) => {
  const { name, tagLine, images, exShowroomPriceDetails } = productDetails;
  console.log("scotiessss", productDetails._id);
  return (
    <div className="p-4 flex sm:ml-0 flex-col lg:ml-[10%] mt-4 w-[100%] lg:w-[80%] items-start justify-between bg-white shadow-md rounded-lg">
      {/* Uncomment and use the image source once available */}
      <img
        src={images[0]}
        alt={name}
        className="w-full object-cover rounded-t-lg"
      />
      <div className="flex flex-col gap-2  w-full">
        <h3 className="text-3xl font-sans font-semibold">{name}</h3>
        <p className="text-gray-500 font-sans text-xs">{tagLine}</p>
        <p className=" text-green-500 mt-10 flex text-sm font-mono">
          <span>
            <MdCurrencyRupee />
          </span>{" "}
          {exShowroomPriceDetails[0].price}
        </p>
        <Link
          to={`EV/${productDetails._id}`}
          className="w-full px-4 py-2 bg-gray-100 shadow-md text-black text-center rounded-md hover:bg-slate-800 focus:outline-none "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

const SomeProducts = () => {
  const [scooties, setScooties] = useState(null);
  const [eriksha, setEriksha] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllScooties = async () => {
      try {
        setLoading(true);
        const response = await apiConnector("GET", GET_PRODUCTS);
        const erikshaData = await apiConnector("GET", GET_PRODUCTS);

        // should have 4 api calls for high speed scooties, low speed scooties, Bikes and E-Riksha
        setScooties(response?.data?.data);

        // Dummy data for E-Riksha
        setEriksha(erikshaData?.data?.data);
        console.log(response?.data?.data);
      } catch (error) {
        console.error("Error getting scooties:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllScooties();
  }, []);

  if (loading) return <p className="">Loading...</p>;

  if (!scooties) return <p className="">No Scooties available</p>;

  return (
    <>
      {/* High speed Scooties section */}
      <h2 className="text-2xl mt-2 ml-2 lg:ml-10 font-sans flex items-center font-semibold lg:p-2">
        High Speed Scooties
      </h2>
      <div className="flex flex-col items-center justify-centers">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {scooties?.splice(0, 3).map((scooty) => (
            <ProductCard key={scooty._id} productDetails={scooty} />
          ))}
        </div>
        <Link
          className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%]  "
          to="/all-products"
        >
          View All
        </Link>
      </div>

      {/* Low speed Scooties section */}
      <h2 className="text-2xl mt-2 ml-2 lg:ml-10 font-sans flex items-center font-semibold lg:p-2">
        Low Speed Scooties
      </h2>
      <div className="flex flex-col items-center justify-centers">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {scooties?.splice(0, 3).map((scooty) => (
            <ProductCard key={scooty._id} productDetails={scooty} />
          ))}
        </div>
        <Link
          className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%]  "
          to="/all-products"
        >
          View All
        </Link>
      </div>
      {/* Low speed Scooties section */}
      <h2 className="text-2xl mt-2 ml-2 lg:ml-10 font-sans flex items-center font-semibold lg:p-2">
        Bikes
      </h2>
      <div className="flex flex-col items-center justify-centers">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {scooties?.splice(0, 3).map((scooty) => (
            <ProductCard key={scooty._id} productDetails={scooty} />
          ))}
        </div>
        <Link
          className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%] "
          to="/all-products"
        >
          View All
        </Link>
      </div>
      {/* E-Riksha */}

      <h2 className="text-2xl mt-2 ml-2 lg:ml-10 font-sans flex items-center font-semibold lg:p-2">
        E-Riksha
      </h2>
      <div className="flex flex-col items-center justify-centers">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {eriksha?.splice(0, 3).map((scooty) => (
            <ProductCard key={scooty._id} productDetails={scooty} />
          ))}
        </div>
        <Link
          className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%] "
          to="/all-products"
        >
          View All
        </Link>
      </div>
      
      <div className="flex flex-col items-center justify-centers">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {eriksha?.splice(0, 3).map((scooty) => (
            <ProductCard key={scooty._id} productDetails={scooty} />
          ))}
        </div>
        <Link
          className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%] "
          to="/all-products"
        >
          View All
        </Link>
      </div>

      <Savings />
      
      <div className="sm:mt-[30%]">

      <FAQ />
      </div>
    </>
  );
};

export default SomeProducts;
