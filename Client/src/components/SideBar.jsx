import React, { useState } from "react";
import { FaArrowCircleLeft, FaCog } from "react-icons/fa";
import Add from "../assets/add.png";
import { IoMdCube } from "react-icons/io";
import { UseContractProvider } from "../context/Context";

const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const { SideBarState, setSideBarState, Side, setSide } =
    UseContractProvider();

  const HandleAddProd = () => {
    setSideBarState(!SideBarState);
  };

  const HandleMyProd = () => {
    setSideBarState(false);
    setSide(!Side);
  };

  return (
    <div
      className={`${
        sideBarOpen ? "w-64" : "w-10"
      } bg-black text-white flex flex-col justify-between h-screen transition-all duration-300 ease-in-out relative`}
    >
      <div
        className={`absolute top-4 cursor-pointer transition-transform duration-300 ease-in-out ${
          sideBarOpen ? "right-4" : "right-0"
        }`}
        onClick={() => setSideBarOpen(!sideBarOpen)}
      >
        <FaArrowCircleLeft
          size={24}
          className={`text-gray-600 transform ${
            sideBarOpen ? "rotate-0" : "rotate-180"
          } transition-transform duration-300 ease-in-out`}
        />
      </div>

      <div
        className={`flex-grow flex flex-col justify-center gap-6 mt-12 ${
          sideBarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300 ease-in-out`}
      >
        <h1
          className="flex justify-center items-center gap-2 text-gray-300 hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
          onClick={HandleAddProd}
        >
          {sideBarOpen && <span>Add Products</span>}{" "}
          <img src={Add} className="h-4" />
        </h1>
        <h1
          className="flex justify-center items-center gap-2 text-gray-300 hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
          onClick={HandleMyProd}
        >
          {sideBarOpen && <span>My Products</span>}{" "}
          <IoMdCube size={17} color="gray" />
        </h1>
      </div>

      <div
        className={`mb-4 flex justify-center items-center hover:scale-110 transition duration-300 ease-in-out cursor-pointer ${
          sideBarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300 ease-in-out`}
      >
        <h1 className="flex gap-2 items-center text-xl">
          <FaCog className="text-blue-400" />
          {sideBarOpen && <span>Settings</span>}
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
