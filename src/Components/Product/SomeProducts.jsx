import React, { useEffect, useState } from "react";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
import { Link } from "react-router-dom";
import FAQ from "../Common/FAQ";

const { GET_PRODUCTS } = endpoints;

const ProductCard = ({ productDetails }) => {
  const { name, tagLine, images } = productDetails;
  console.log("scotiessss", productDetails._id);
  return (
    <div className="p-4 flex flex-col justify-between bg-white shadow-md rounded-lg">
      {/* Uncomment and use the image source once available */}
      <img
        src={images[0]}
        alt={name}
        className="w-full object-cover rounded-t-lg"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{tagLine}</p>
        <Link
          to={`/EV/${productDetails._id}`}
          className="w-full px-4 py-2 bg-black text-white text-center rounded-md hover:bg-slate-800 focus:outline-none"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

const SomeProducts = () => {
  const [scooties, setScooties] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllScooties = async () => {
      try {
        setLoading(true);
        const response = await apiConnector("GET", GET_PRODUCTS);
        setScooties(response?.data?.data);
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
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scooties?.splice(0, 6).map((scooty) => (
          <ProductCard key={scooty._id} productDetails={scooty} />
        ))}
      </div>
      <Link
        className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-2xl font-bold my-3 py-2 px-6 text-black text-center w-full md:w-auto"
        to="/all-products"
      >
        View All
      </Link>
      <FAQ/>
    </div>
  );
};

export default SomeProducts;
