import React from "react";

const Features = () => {
  return (
    <div>
      <div className="text-center my-10">
        <h3 className="mb-10 text-red-600 font-bold my-10 text-2xl">
          Why Choose PowerFlex
        </h3>

        <h1 className="text-5xl font-bold text-gray-800 ">
          PowerFlex Features
        </h1>
      </div>

      <div className="container mx-auto flex ">
        <div className="bg-[#d1d6d3] p-10 rounded-lg m-5 flex flex-col gap-4 ">
          <img
            src="https://reactheme.com/products/wordpress/landing/powerflow/demo/icons/elementor.png"
            alt=""
            className="w-25"
          />
          <h3 className="font-semibold text-zinc-800">
            Personal Attention to Every Client
          </h3>
          <p>
            We focus on individual progress in a welcoming, supportive gym
            culture.
          </p>
        </div>
        <div className="bg-[#d1d6d3] p-10 rounded-lg flex flex-col gap-4 m-5">
          <img
            src="https://reactheme.com/products/wordpress/landing/powerflow/demo/icons/flash.png"
            alt=""
            className="w-25"
          />
          <h3 className="font-semibold text-zinc-800">
            Flexible & Affordable Memberships
          </h3>
          <p>
            Choose from monthly or long-term plans that fit your lifestyle and
            budget.
          </p>
        </div>
        <div className="bg-[#d1d6d3] p-10 rounded-lg flex flex-col gap-4 m-5">
          <img
            src="https://reactheme.com/products/wordpress/landing/powerflow/demo/icons/responsive.png"
            alt=""
            className="w-25"
          />
          <h3 className="font-semibold text-zinc-800">
            Goal-Focused Training Programs
          </h3>
          <p>
            Whether it’s fat loss, muscle gain, or overall fitness, our programs
            are tailored to your goals.
          </p>
        </div>
      </div>

    <div className="container flex  gap-10 text-[#FFFFFF] my-10 mx-auto justify-center">
        <div className="text-center bg-red-600 p-5 h-40 w-80 rounded-2xl">
          <p className="text-5xl font-bold"> 13,000+</p>{" "}
          <p className="my-5 text-xl">SatisFied Clients</p>
        </div>
        <div className="text-center bg-red-600 p-5 h-40 w-80 rounded-2xl">
          {" "}
          <p className="text-5xl font-bold">10</p> <p className="my-5 text-xl">Years Of Experience </p>{" "}
        </div>
        <div className="text-center bg-red-600 p-5 h-40 w-80 rounded-2xl">
          {" "}
          <p className="text-5xl font-bold">24/7</p> <p className="my-5 text-xl">Free Consultation </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
