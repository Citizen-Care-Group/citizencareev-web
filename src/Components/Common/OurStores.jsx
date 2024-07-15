import React from "react";
import StoreCardScroller from "./StoreCardScroller";

const OurStores = () => {
  const cards = [
    'Card 1 Content',
    'Card 2 Content',
    'Card 3 Content',
    'Card 4 Content',
    'Card 5 Content',
    'Card 6 Content'
  ];
  return (
    <div className="flex justify-center flex-col w-full h-96 items-center  bg-[#eeeeee]">
      <div className="flex w-full lg:w-[90%] bg-red-600 flex-col items-center justify-center gap-2.5 px-16 ">
        <div className="relative flex-1 [font-family:'Darker_Grotesque-Bold',Helvetica] font-bold text-black text-2xl tracking-[-0.96px] leading-[55.3px]">
          Our Stores
        </div>
        <StoreCardScroller cards={cards} />
      </div>
    </div>
  );
};

export default OurStores;
