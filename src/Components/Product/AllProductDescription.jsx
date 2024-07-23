import React, { useEffect, useState } from "react";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
import { Link, useParams } from "react-router-dom";
import FAQ from "../Common/FAQ";

const { GET_PRODUCT } = endpoints;

const AllProductDescription = () => {
  const { id } = useParams();
  const [scooty, setScooty] = useState(null);
  const [loading, setLoading] = useState(false);
//   console.log("id", id);
  useEffect(() => {
    const fetchScooty = async () => {
      try {
        setLoading(true);
        const response = await apiConnector("GET", GET_PRODUCT(id));
        setScooty(response?.data?.data);
        // console.log("product fetched", response?.data?.data);
      } catch (error) {
        console.error("Error fetching scooty details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchScooty();
  }, [id]);
  if (loading) return <p>Loading...</p>;
  if (!scooty) return <p>No details available</p>;
  return (
    <>
      <div className="bg-black flex flex-col lg:flex-row justify-center items-center text-white p-2 lg:p-8">
        <img
          src={scooty.images[0]}
          alt={scooty.name}
          className=" w-full0 lg:w-[40%] h-auto"
        />
        <div className="max-w-2xl mx-auto">
          <h1 className=" text-2xl lg:text-4xl text-center my-4 text-customGreen">
            {scooty.name}
          </h1>
          <p className="text-xl text-center my-2">{scooty.tagLine}</p>
          <p className="text-lg text-center my-2">{scooty.note}</p>
          <div className="mt-6 flex flex-col">
            <p>
              <strong className="text-customGreen">Battery:</strong>{" "}
              {scooty.battery}
            </p>
            <p>
              <strong className="text-customGreen">Power:</strong>{" "}
              {scooty.power}
            </p>
            <p>
              <strong className="text-customGreen">Speed Range:</strong>{" "}
              {scooty.speedRange}
            </p>
            <p>
              <strong className="text-customGreen">Wheel:</strong>{" "}
              {scooty.wheel}
            </p>
            <h2 className="text-2xl mt-4 text-customGreen">
              Ex-Showroom Price Details:
            </h2>
            <ul className="list-disc list-inside">
              {scooty.exShowroomPriceDetails.map((detail) => (
                <li key={detail._id} className="ml-4">
                  {detail.type}: ₹{detail.price}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl mt-4 text-customGreen">Features:</h2>
            <ul className="list-disc list-inside">
              {scooty.features.map((feature) => (
                <li key={feature._id} className="ml-4">
                  {feature.text}
                </li>
              ))}
            </ul>
            <Link
              to="/get-in-touch"
              className=" bg-customGreen text-black px-4 py-2 rounded-md my-4 text-center font-bold font-serif"
            >
             Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default AllProductDescription;
