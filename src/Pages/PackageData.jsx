import React from "react";
import { CiCircleChevRight } from "react-icons/ci";
import toast from "react-hot-toast";

const PackageData = ({ pData }) => {
  const notify =()=>{
    toast.success("Package Booked Successfully");
  }

  return (
    <div className="border border-purple-700 p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <h2 className="font-bold text-3xl text-center mb-2">{pData.name}</h2>

      <h3 className="font-semibold text-xl text-purple-700 text-center mb-6">
        {pData.title}
      </h3>

      <ul className="flex flex-col gap-3 mb-6 text-left mx-12">
        {pData.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-800 ml-5">
            <CiCircleChevRight className="text-red-600 text-xl mt-1 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <h3 className=" text-3xl text-center font-bold mb-5">
        Price: <span className="text-red-600 text-3xl ">{pData.price}</span>
      </h3>

      <h3 className="font-semibold text-lg text-center text-gray-800">
        Duration: <span className="text-purple-700">{pData.duration}</span>
      </h3>
      <div className="flex justify-center mt-5">
        <a
          href="#_"
          className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"   onClick={notify}
        >
          <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
          <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
          </span>
          <span class="relative text-white">Book Now</span>
        </a>
      </div>
    </div>
  );
};

export default PackageData;
