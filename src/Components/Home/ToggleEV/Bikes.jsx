import React, { useEffect } from "react";
import { useState } from "react";
import scooty from "../../../Images/Scooty/scooty.png";
import { apiConnector } from "../../../Services/connector";
import { endpoints } from "../../../Services/apis";
import { Link } from "react-router-dom";
import { FaCaretRight, FaCaretLeft,FaChevronRight } from "react-icons/fa";
const { GET_PRODUCTS } = endpoints;

const Bikes = () => {
  const [loading, setLoading] = useState(null);
  const [cardss, setCards] = useState([]);

  useEffect(() => {
    const getAllBikes = async () => {
      try {
        // console.log("Getting all Scooties");
        setLoading(true);
        const response = await apiConnector("GET", GET_PRODUCTS);
        console.log("Scooties API RESPONSE in toggler:", response?.data);
        let UnFiltered = response?.data?.data || [];
        let filtered = UnFiltered.filter((item) => item.type === "BIKE");
        console.log("Bikes ", filtered);

        setCards(filtered || []);
        // console.log(object);
      } catch (error) {
        // console.error("Error getting scooties:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllBikes();
  }, []);

  const [currentCard, setCurrentCard] = useState(0);
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
    <div className=" max-w-full gap-1 lg:gap-4 flex justify-center items-center lg:max-w-[65%] mx-auto mt-10">
      <button
        onClick={prevCard}
        className=" text-slate-700 text-3xl rounded  transition duration-300"
      >
        <FaCaretLeft />
      </button>
      <div className="bg-customGrey text-white p-2 lg:p-4 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform">
        <img
          className="text-xl font-bold mb-4 h-[50vh]"
          alt="current pic"
          src={cardss[currentCard]?.images?.[0] || scooty}
        />
        <div className=" flex justify-between items-center border-b">
          <h2 className="text-xl font-bold ">{cardss[currentCard]?.name}</h2>
          <p>₹ {cardss[currentCard]?.exShowroomPriceDetails[0]?.price} </p>
        </div>
        <div className=" flex justify-center border-b my-2 py-2">
          <ul className="text-white list-disc mx-auto">
            {cardss[currentCard]?.features.slice(0, 3).map((feature) => (
              <li> {feature?.text} </li>
            ))}
          </ul>
        </div>
        <div className=" flex justify-center">
          <Link
            className=" bg-white hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-2 w-full py-2 px-1 rounded-md text-slate-700"
            to={`/EV/${cardss[currentCard]?._id}`}
          >
            <span>Explore </span> <FaChevronRight />
          </Link>
        </div>
      </div>
      <button
        onClick={nextCard}
        className="text-slate-700  py-2 text-3xl rounded "
      >
        <FaCaretRight />
      </button>
    </div>
  );
};

export default Bikes;
