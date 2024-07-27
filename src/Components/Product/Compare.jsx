import React, { useEffect, useState } from "react";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";

const { GET_PRODUCTS } = endpoints;

const scooters = [
  {
    name: "Scooty name 1",
    price: "80,000",
    emi: "EMI starts at 3000",
    speed: "80 kmph",
    range: "40 kmph",
    factors: ["80,000", "80,000", "80,000", "80,000", "80,000"],
    image: "link-to-scooty1-image", // Replace with actual image URL
  },
  {
    name: "Scooty name 2",
    price: "80,000",
    emi: "EMI starts at 3000",
    speed: "80 kmph",
    range: "80 kmph",
    factors: ["80,000", "80,000", "80,000", "80,000", "80,000"],
    image: "link-to-scooty2-image", // Replace with actual image URL
  },
];

const ScooterComparison = () => {
  const [loading, setLoading] = useState(false);
  const [selectedScooters, setSelectedScooters] = useState([
    scooters[0],
    scooters[1],
  ]);

  const [firstScooter, setFirstScooter] = useState(null);
  const [secondScooter, setSecondScooter] = useState(null);

  const [allScooties, setAllScooties] = useState(null);

  useEffect(() => {
    const getAllScooties = async () => {
      try {
        // console.log("Getting all Scooties");
        setLoading(true);
        const response = await apiConnector("GET", GET_PRODUCTS);
        // console.log("Scooties API RESPONSE:", response?.data?.data);
        setAllScooties(response?.data?.data);
        setFirstScooter(response?.data?.data[0]);
        setSecondScooter(response?.data?.data[1]);
      } catch (error) {
        // console.error("Error getting scooties:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllScooties();
  }, []);

  if (loading) return <p className=" ">Loading...</p>;
  if(firstScooter) {
    console.log("firstScooter", firstScooter);
  }
  if(secondScooter) {
    console.log("secondScooter", secondScooter);
  }
  if (!allScooties) return <p className="">No Scooties available</p>;
  if(allScooties) {
    console.log("allScooties", allScooties);
  }

  const handleScooterChange = (index, selectedName) => {
    const selectedScooter = scooters.find(
      (scooter) => scooter.name === selectedName
    );
    setFirstScooter(selectedScooter);
    setSelectedScooters((prev) => {
      const newSelection = [...prev];
      newSelection[index] = selectedScooter;
      return newSelection;
    });
  };
  const handleScooterChangeFirst = (selectedName) => {
    const selectedScooter = allScooties.find(
      (scooter) => scooter.name === selectedName
    );
    setFirstScooter(selectedScooter);
  };

  const handleScooterChangeSecond = (selectedName) => {
    const selectedScooter = allScooties.find(
      (scooter) => scooter.name === selectedName
    );
    setSecondScooter(selectedScooter);
  };

  const labels = [
    "Price",
    "Top speed",
    "Certified range",
    "Factor 1",
    "Factor 2",
    "Factor 3",
    "Factor 4",
    "Factor 5",
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-4 mt-10">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4"></th> {/* Empty cell for alignment */}
              {!loading && firstScooter ? (
                <th className="p-4">
                <div className="flex flex-col items-center w-full">
                  <img
                    src={firstScooter.images[0] || ""}
                    alt={firstScooter.name || ""}
                    className="h-28 w-20 lg:w-32 object-fill lg:object-cover mb-2"
                  />
                  <select
                    value={firstScooter.name || ""}
                    onChange={(e) =>
                      handleScooterChangeFirst(e.target.value)
                    }
                    className="block w-[100%] lg:w-[80%] text-center border border-gray-300 rounded-md"
                  >
                    {allScooties.map((option, idx) => (
                      <option key={idx} value={option.name || ""}>
                        {option.name || ""}
                      </option>
                    ))}
                  </select>
                </div>
              </th>
              ) : (
                <th className="p-4">Loading...</th>
              )}
              {/* second Scooter */}
              {!loading && secondScooter ? (
                <th className="p-4">
                <div className="flex flex-col items-center">
                  <img
                    src={secondScooter.images[0] || ""}
                    alt={secondScooter.name || ""}
                    className="h-28 w-20 lg:w-32 object-fill lg:object-cover mb-2"
                  />
                  <select
                    value={secondScooter.name || ""}
                    onChange={(e) =>
                      handleScooterChangeSecond(e.target.value)
                    }
                    className="block w-[100%] lg:w-[80%] text-center border border-gray-300 rounded-md"
                  >
                    {allScooties.map((option, idx) => (
                      <option key={idx} value={option.name || ""}>
                        {option.name || ""}
                      </option>
                    ))}
                  </select>
                </div>
              </th>
              ) : (
                <th className="p-4">Loading...</th>
              )}
                
            </tr>
          </thead>
          {/* carefully add the table body */}
          <tbody>
            {labels.map((label, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border p-4 font-semibold text-start">{label}</td>
                {selectedScooters.map((scooter, index) => (
                  <td key={index} className="border p-4 text-center">
                    {idx === 0 && (
                      <>
                        <span className="block font-bold">{scooter.price}</span>
                        <span className="block text-sm">{scooter.emi}</span>
                      </>
                    )}
                    {idx === 1 && <span>{scooter.speed}</span>}
                    {idx === 2 && <span>{scooter.range}</span>}
                    {idx >= 3 && <span>{scooter.factors[idx - 3]}</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-black text-white py-2 px-4 rounded">
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default ScooterComparison;
