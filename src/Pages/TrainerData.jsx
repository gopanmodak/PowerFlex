import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const TrainerData = ({ data }) => {
  return (
    <div className="  border border-purple-600 text-center rounded p-8 hover:shadow-2xl shadow-lg transition-shadow duration-300 ">
      <img src={data.image} alt={data.name} />
      <h3 className="font-bold">{data.name}</h3>
      <p className="text-gray-800">{data.position}</p>
      <div className="flex ">
        <ul className="flex gap-4 justify-center mt-2 text-purple-600  mx-auto ">
          <li className="text-blue-700 hover:scale-130 text-xl duration-150 border p-1 rounded-4xl hover:bg-blue-700 hover:text-white"  > 
            <FaFacebookF />
          </li>
          <li className="text-pink-800 hover:scale-130 duration-150 text-xl border p-1 rounded-4xl hover:bg-pink-800 hover:text-white">
            <FaInstagram />
          </li>
          <li className="text-red-600 hover:scale-130 duration-150 text-xl border p-1 rounded-4xl hover:bg-red-600 hover:text-white"> 
            <FaYoutube />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrainerData;
