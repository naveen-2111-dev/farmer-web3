import React from "react";
import Navbar from "../../components/Navbar";
import Meta from "../../assets/image.png";

const Home = () => {
  return (
    <div className="text-gray-400">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center p-10">
        <div className="bg-gradient-to-b from-nor2 to-nor rounded-lg flex flex-col items-center p-6 w-64">
          <img src={Meta} alt="image" className="w-full h-auto mb-4" />
          <h1 className="text-xl font-bold mb-2">Title</h1>
          <p className="mb-4 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex items-center justify-between w-full mb-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Buy
            </button>
            <input
              type="text"
              className="appearance-none border-2 border-blue-500 p-2 w-20 ml-4 inputBoxs"
            />
          </div>
          <span className="text-lg font-semibold">2ETH</span>
        </div>

        <div className="bg-gradient-to-b from-nor2 to-nor rounded-lg  flex flex-col items-center p-6 w-64">
          <img src={Meta} alt="image" className="w-full h-auto mb-4" />
          <h1 className="text-xl font-bold mb-2">Title</h1>
          <p className="mb-4 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex items-center justify-between w-full mb-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Buy
            </button>
            <input
              type="text"
              className="appearance-none border-2 border-blue-500 p-2 w-20 ml-4 inputBoxs"
            />
          </div>
          <span className="text-lg font-semibold">2ETH</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
