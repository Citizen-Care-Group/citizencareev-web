import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FAQ from "../Common/FAQ";
import { MdCurrencyRupee } from "react-icons/md";
import ScooterComparison from "./Compare";

// const { GET_PRODUCTS, GET_PRODUCTS_BY_TYPE } = endpoints;

const ProductCard = ({ productDetails }) => {
  const { name, tagLine, images, exShowroomPriceDetails } = productDetails;
  console.log("scotiessss", productDetails._id);
  return (
    <div className="p-4 overflow-hidden transition-all duration-500 ease-in-out flex sm:ml-0 flex-col lg:ml-[10%] mt-4 w-[100%] lg:w-[80%] items-start justify-between bg-white shadow-md rounded-lg">
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
          className="w-full px-4 py-2 bg-gray-100 shadow-md text-black text-center rounded-md hover:bg-green-500 hover:text-white focus:outline-none "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

const SomeProducts = () => {
  const [loading, setLoading] = useState(false);
  const [highSpeedScooties, setHighSpeedScooties] = useState(null);
  const [lowSpeedScooties, setLowSpeedScooties] = useState(null);
  const [highSpeedViewAll, setHighSpeedViewAll] = useState(false);
  const [lowSpeedviewAll, setLowSpeedviewAll] = useState(false);
  const [bikeviewAll, setBikeViewAll] = useState(false);
  const [bike, setBike] = useState(null);
  const [test, setTest] = useState(null);

  useEffect(() => {
    const getAllScooties = async () => {
      try {
        setLoading(true);

        // Fetching High speed scooties data
        const responses = await Promise.all([
          fetch("https://citizencareev-server-prod-negd46p6yq-el.a.run.app/api/v1/products?type=SCOOTER&speedType=HIGH", { method: "GET", headers: { "Content-Type": "application/json" }}),
          fetch("https://citizencareev-server-prod-negd46p6yq-el.a.run.app/api/v1/products?type=SCOOTER&speedType=LOW", { method: "GET", headers: { "Content-Type": "application/json" }}),
          fetch("https://citizencareev-server-prod-negd46p6yq-el.a.run.app/api/v1/products?type=BIKE&speedType=NA", { method: "GET", headers: { "Content-Type": "application/json" }})
        ]);

        if (responses.some(response => !response.ok)) {
          throw new Error('Failed to fetch data');
        }

        const [highData, lowData, bikeData] = await Promise.all(responses.map(res => res.json()));
        setHighSpeedScooties(highData?.data || []);
        setLowSpeedScooties(lowData?.data || []);
        setBike(bikeData?.data || []);

        // Dummy data for E-Riksha
        setTest(test?.data?.data);
      } catch (error) {
        console.error("Error getting scooties:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllScooties();
  }, [highSpeedViewAll, lowSpeedviewAll, bikeviewAll]);

  if (loading) return <p className="">Loading...</p>;

  // if (!scooties) return <p className="">No Scooties available</p>;

  return (
    // <p>hiii</p>
    <>
      {/* High speed Scooties section */}
      <h2 className="text-2xl mt-2 ml-2 lg:ml-10 font-sans flex items-center font-semibold lg:p-2">
        High Speed Scooties
      </h2>
      <div className="flex flex-col items-center justify-centers overflow-hidden transition-all duration-500 ease-in-out">
        <div className="overflow-hidden transition-all duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highSpeedViewAll ? (
            <>
              {highSpeedScooties?.map((scooty) => (
                <ProductCard key={scooty._id} productDetails={scooty} />
              ))}
            </>
          ) : (
            <>
              {highSpeedScooties?.splice(0, 3).map((t) => (
                <ProductCard key={t._id} productDetails={t} />
              ))}
            </>
          )}

          {/* {scooties?.splice(0, 3).map((scooty) => (
            <ProductCard key={scooty._id} productDetails={scooty} />
          ))} */}
        </div>
        <button
          className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%]  "
          // to="/all-products"
          hidden={highSpeedViewAll}
          onClick={() => {
            setHighSpeedViewAll(true);
          }}
        >
          View All
        </button>
      </div>

      {/* Low speed Scooties section */}
      <h2 className="text-2xl mt-2 ml-2 lg:ml-10 font-sans flex items-center font-semibold lg:p-2">
        Low Speed Scooties
      </h2>
      <div className="overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-centers">
        <div className="overflow-hidden transition-all duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lowSpeedviewAll ? (
            <>
              {lowSpeedScooties?.map((scooty) => (
                <ProductCard key={scooty._id} productDetails={scooty} />
              ))}
            </>
          ) : (
            <>
              {lowSpeedScooties?.splice(0, 3).map((t) => (
                <ProductCard key={t._id} productDetails={t} />
              ))}
            </>
          )}
        </div>
        <Link
          className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%]  "
          hidden={lowSpeedScooties?.length <= 3 || lowSpeedviewAll}
          onClick={() => setLowSpeedviewAll(true)}
        >
          View All
        </Link>
      </div>
      <h2 className="text-2xl mt-2 ml-2 lg:ml-10 font-sans flex items-center font-semibold lg:p-2">
        Bikes
      </h2>
      <div className="overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-centers">
        <div className="overflow-hidden transition-all duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bikeviewAll ? (
            <>
              {bike?.map((scooty) => (
                <ProductCard key={scooty._id} productDetails={scooty} />
              ))}
            </>
          ) : (
            <>
              {bike?.splice(0, 3).map((t) => (
                <ProductCard key={t._id} productDetails={t} />
              ))}
            </>
          )}
        </div>
        <Link
          className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%] "
          hidden={bike?.length <= 3 || bikeviewAll}
          onClick={() => setBikeViewAll(true)}
        >
          View All
        </Link>
      </div>
      {/* E-Riksha */}

      {/* <h2 className="text-2xl mt-2 ml-2 lg:ml-10 font-sans flex items-center font-semibold lg:p-2">
        E-Riksha
      </h2>
      <div className="flex flex-col items-center justify-centers">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {eRikshaViewAll ? (
            <>
              {eriksha?.map((scooty) => (
                <ProductCard key={scooty._id} productDetails={scooty} />
              ))}
            </>
          ) : (
            <>
              {eriksha?.splice(0, 3).map((t) => (
                <ProductCard key={t._id} productDetails={t} />
              ))}
            </>
          )}
        </div>
        <Link
          className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%] "
          hidden={eRikshaViewAll}
          onClick={() => setERikshaViewAll(true)}
        >
          View All
        </Link>
      </div> */}

      <ScooterComparison />

      <div className="sm:mt-[30%]">
        <FAQ />
      </div>
    </>
  );
};

export default SomeProducts;
