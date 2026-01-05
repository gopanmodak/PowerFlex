import React from "react";

import facebook from "../../assets/Images/icons/facebook.png";
import instagram from "../../assets/Images/icons/instagram.png";
import youtube from "../../assets/Images/icons/youtube.png";
import twitter from "../../assets/Images/icons/twitter.png";
const Footer = () => {
  return (
    <div className="flex  bg-amber-200 mt-30 py-10 ">
      <div className="flex flex-col mx-20 w-1/3 my-5 gap-2">
        <h3 className="text-2xl text-purple-500 font-bold mx-20">
          Power<span className="text-red-500">Flex</span>
        </h3>
        <p>
          Build strength and confidence at our gym with state-of-the-art
          equipment, personalized training, and a motivating community.
        </p>
      </div>
      <div className="flex flex-col mx-20 w-1/3 my-6">
        <h3 className="xl mx-20 font-bold">Address</h3>
        <p className="xl mx-20">Murmur-10</p>
        <p className="xl mx-20">Sempra Prata</p>
        <p  className="xl mx-20">Dewan Villa</p>
      </div>
      <div className="flex flex-col mx-20 w-1/3 my-6">
        <h3 className="xl mx-15 font-bold">Contact</h3>
        <p className="xl mx-5"> +375(44)-777-24-12</p>
        <p className="xl mx-5">powerflex@gmail.com</p>

        <div className="flex gap-4 mt-4 text-blue-700 mx-5">
          <img src={facebook} alt="" className="bg-blue-700 p-1 rounded-4xl hover:scale-110 duration-300 " />
          <img src={instagram} alt=""  className="bg-red-500 p-1 rounded-4xl hover:scale-110 duration-300"/>
          <img src={youtube} alt="" className="bg-red-600 p-1 rounded-4xl hover:scale-110 duration-300" />
          <img src={twitter} alt=""  className="bg-blue-400 p-1 rounded-4xl hover:scale-110 duration-300"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
