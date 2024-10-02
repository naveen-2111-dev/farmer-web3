import React from 'react';
import Construction from "../../assets/const.svg";

const Other = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-center px-4">
      <img src={Construction} alt="construction" className="w-1/2 max-w-sm mb-6" />
      <h1 className="text-white text-3xl mb-4">🚧 Page Under Maintenance 🚧</h1>
      <p className="text-white text-lg">We are currently working on this page. Please check back later.</p>
      <p className="text-white text-lg mt-2">Thank you for your patience!</p>
    </div>
  );
};

export default Other;
