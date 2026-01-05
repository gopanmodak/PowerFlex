import React from "react";
import Footer from "../FooterBar/Footer";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between bg-pink-100 p-4 items-center shadow-lg ">
        <h3 className="text-2xl text-purple-500 font-bold mx-20">
          Power<span className="text-red-500">Flex</span>
        </h3>

        <ul className="flex gap-7 mr-100 justify-center items-center">
          <NavLink to='/' className={({ isActive }) => 
          isActive
            ? "text-purple-700 border-b-2 border-purple-700 pb-1"
            : "text-gray-700 hover:text-purple-600"
        }>
            <li>Home</li>
          </NavLink>
          <NavLink to='facilities' className={({ isActive }) =>
          isActive
            ? "text-purple-700 border-b-2 border-purple-700 pb-1"
            : "text-gray-700 hover:text-purple-600"
        }>
            
            <li>Facilities</li>
          </NavLink>
          <NavLink to='about' className={({ isActive }) =>
          isActive
            ? "text-purple-700 border-b-2 border-purple-700 pb-1"
            : "text-gray-700 hover:text-purple-600"
        }>
            
            <li>About Us</li>
          </NavLink>
          <NavLink to='/trainers' className={({ isActive }) =>
          isActive
            ? "text-purple-700 border-b-2 border-purple-700 pb-1"
            : "text-gray-700 hover:text-purple-600"
        }>
            
            <li>Trainers</li>
          </NavLink>
          <NavLink to='/packages' className={({ isActive }) =>
          isActive
            ? "text-purple-700 border-b-2 border-purple-700 pb-1"
            : "text-gray-700 hover:text-purple-600"
        }>
            
            <li>Packages</li>
          </NavLink>

        </ul>

        <button className="border p-2 border-pink-500 text-red-700 font-semibold hover:bg-pink-500 duration-100 hover:text-white rounded-lg cursor-pointer">
          Get Started
        </button>
      </div>
      <div>
        {" "}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Navbar;
