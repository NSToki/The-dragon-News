import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="">
      <div className="flex items-center bg-[#f3f3f3] gap-5 p-2  text-center shadow-sm">
        <p className="bg-[#D72050] text-white font-semibold px-4 py-2">
          Latest
        </p>
        <Marquee className="text-gray-800 px-3 font-semibold" pauseOnHover={true}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          sunt.
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
