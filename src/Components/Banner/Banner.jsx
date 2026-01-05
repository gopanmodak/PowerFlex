import React from "react";

import BannerImage from "../../assets/Images/allMAinIMages/gym-banner.png";

const Banner = () => {
  return (
    <div className="relative mt-4 ">
      <img
        src={BannerImage}
        alt=""
        className="w-full h-150 object-cover rounded-md shadow-md bg-linear-red-to-pink-500  "
      />

      <div className="absolute top-1/4 left-20 flex flex-col gap-5">
        <h1 className="text-5xl font-bold w-100 p-2 text-gray-300">Train Harder To Gain A Healthy And Fit Body</h1>
        <p className="text-lg w-100 p-1 text-gray-200">
          We are always there to help you to make a healthy body which can help
          to head
        </p>
        <button className="bg-red-600 text-white rounded-sm p-2 font-semibold w-30 hover:bg-red-700 duration-100">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
