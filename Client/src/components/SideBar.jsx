import React from "react";
import { FaCog } from "react-icons/fa";
import Add from "../assets/add.png";
import { IoMdCube } from "react-icons/io";

const SideBar = () => {
  return (
    <div className="text-white w-64 bg-black text-center flex flex-col justify-evenly h-screen">
      <div></div>
      <div className="text-lg flex flex-col gap-3">
        <h1 className="flex justify-center items-center gap-2 text-gray-300 hover:scale-110 transition duration-300 ease-in-out">
          Add Products <img src={Add} className="h-4" />
        </h1>
        <h1 className="flex justify-center items-center gap-2 text-gray-300 hover:scale-110 transition duration-300 ease-in-out">
          my products <IoMdCube size={17} color="gray" />
        </h1>
      </div>
      <div className="flex justify-center items-center hover:scale-110 transition duration-300 ease-in-out ">
        <h1 className="flex gap-2 items-center text-xl">
          <FaCog className="text-blue-400" /> settings
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
