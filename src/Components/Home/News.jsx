import React, { useEffect, useState } from "react";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
import testImage from "../../Images/EV-About.jpg"
const { GET_NEWS } = endpoints;

const News = () => {
  const [loading, setLoading] = useState(true);
  const [News, SetNews] = useState();

  useEffect(() => {
    const getAllScooties = async () => {
      try {
        setLoading(true);
        const response = await apiConnector("GET", GET_NEWS);
        console.log("newws data", response?.data);
        SetNews(response?.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error getting scooties:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllScooties();
  }, []);

  // const news = [
  //   {
  //     photo: "image",
  //     headline: "this is the new",
  //     moreInfo: "this news is regarding the scooter vehicle",
  //   },
  //   {
  //     photo: "image",
  //     headline: "this is the new",
  //     moreInfo: "this news is regarding the scooter vehicle",
  //   },
  //   {
  //     photo: "image",
  //     headline: "this is the new",
  //     moreInfo: "this news is regarding the scooter vehicle",
  //   },
  //   {
  //     photo: "image",
  //     headline: "this is the new",
  //     moreInfo: "this news is regarding the scooter vehicle",
  //   },
  // ];

  if (loading) {
    return null;
  }
  return (
    <div className=" w-full  flex flex-col justify-center items-center">
      <h1 className=" text-2xl font-bold">Reports & Headline</h1>
      <div className=" w-[90%] flex flex-wrap gap-2 m-4 justify-between">
        {News.map((item, index) => (
          <div key={index} className="flex gap-2 w-full lg:w-[35%]    border-black">
            <img src={testImage} alt="newsImage" width={70} />
            <div className=" flex flex-col gap-2 items-start">
              <p> {item.date} </p>
              <h1> {item.title} </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
