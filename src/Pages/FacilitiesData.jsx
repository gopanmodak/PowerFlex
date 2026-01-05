import React from "react";

const FacilitiesData = ({ fData }) => {
  const { image, title, body } = fData;
  return (
    <div className="items-center flex flex-col gap-3 border p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-pink-100 ">
      <img src={image} alt="" className="w-20 p-2 bg-red-400 shadow-lg rounded-md " />
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-800">{body}</p>
    </div>
  );
};

export default FacilitiesData;
