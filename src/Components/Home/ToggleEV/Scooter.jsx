import React, { useEffect, useState } from "react";
import scooty from "../../../Images/Scooty/scooty.png";
import { apiConnector } from "../../../Services/connector";
import { endpoints } from "../../../Services/apis";
import { Link } from "react-router-dom";

const { GET_PRODUCTS } = endpoints;

const Scooter = () => {
  const [loading, setLoading] = useState(null);
  const [cardss, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const getAllScooties = async () => {
      try {
        setLoading(true);
        const response = await apiConnector("GET", GET_PRODUCTS);
        console.log("Scooties API RESPONSE in toggler:", response?.data);
        let UnFiltered = response?.data?.data || [];
        let filtered = UnFiltered.filter((item) => item.type === "SCOOTER");
        console.log("filtered", filtered);

        setCards(filtered || []);
      } catch (error) {
        console.error("Error getting scooties:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllScooties();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cardss.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [cardss.length]);

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cardss.length);
  };

  const prevCard = () => {
    setCurrentCard(
      (prevCard) => (prevCard - 1 + cardss.length) % cardss.length
    );
  };

  if (loading) return <p className=" ">Loading...</p>;

  if (!cardss.length) return <p>No scooties available.</p>;

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-customGrey text-white p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform">
        <img
          className="text-xl font-bold mb-4 h-[50vh]"
          alt="current pic"
          src={cardss[currentCard]?.images?.[0] || scooty}
        />
        <h2 className="text-xl font-bold mb-4">{cardss[currentCard]?.name}</h2>
        <div className=" flex justify-between items-center">
          <p className="text-white">{cardss[currentCard]?.tagLine}</p>
          <Link className=" bg-customGreen py-2 px-1 rounded-md text-white" to={`/EV/${cardss[currentCard]?._id}`} >Know More</Link>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevCard}
          className="bg-customGreen text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Previous
        </button>
        <button
          onClick={nextCard}
          className="bg-customGreen text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Scooter;
