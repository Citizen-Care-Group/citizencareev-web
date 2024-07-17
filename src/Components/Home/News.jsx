import React from "react";

const News = () => {
  const news = [
    {
      photo: "image",
      headline: "this is the new",
      moreInfo: "this news is regarding the scooter vehicle",
    },
    {
      photo: "image",
      headline: "this is the new",
      moreInfo: "this news is regarding the scooter vehicle",
    },
    {
      photo: "image",
      headline: "this is the new",
      moreInfo: "this news is regarding the scooter vehicle",
    },
    {
      photo: "image",
      headline: "this is the new",
      moreInfo: "this news is regarding the scooter vehicle",
    },
    {
      photo: "image",
      headline: "this is the new",
      moreInfo: "this news is regarding the scooter vehicle",
    },
    {
      photo: "image",
      headline: "this is the new",
      moreInfo: "this news is regarding the scooter vehicle",
    },
  ];
  return (
      <div className=" w-full  flex flex-col justify-center">
          <h1 className=" text-2xl font-bold">Reports & Headline</h1>
      <div className=" w-[90%] flex flex-wrap gap-2 m-4 justify-center">
        {news.map((item, index) => 
          (<div key={index} className="flex gap-2 border-2 border-black">
            <img src="" alt="newsImage" />
            <div className=" flex flex-col gap-2 items-start">
              <h1> {item.headline} </h1>
              <p> {item.moreInfo} </p>
            </div>
          </div>)
        )}
      </div>
    </div>
  );
};

export default News;
