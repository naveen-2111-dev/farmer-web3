import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FarmerLogin = () => {
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();

  const HandlePasswordShow = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <div className="flex justify-center h-screen items-center bg-gradient-to-b from-black to-nor">
        <div className="bg-gradient-to-b from-nor2 to-nor p-10 w-96 sm:w-full sm:m-6 lg:w-1/2 rounded-lg">
          <div className="mb-10 flex justify-between items-center">
            <h1 className="font-extrabold text-blue-400 text-md sm:text-sm md:text-md lg:text-xl flex gap-2 text-center">
              Login
              <span className="flex lg:hidden xl:hidden">Auth</span>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="w-8 h-8 text-gray-600 hover:scale-110 cursor-pointer"
              onClick={() => navigate("/console")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5-5 5M6 7l5 5-5 5"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="name" className="inputBox" />
            <input type="text" placeholder="email" className="inputBox" />
            <div className="relative">
              <input
                type={checked ? "text" : "password"}
                placeholder="password"
                className="inputBox" 
              />
              <button
                type="button"
                onClick={HandlePasswordShow}
                className="absolute inset-y-0 right-0 font-xl flex items-center px-3 cursor-pointer text-gray-600"
              >
                {checked ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerLogin;
