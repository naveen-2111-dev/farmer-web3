import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const FarmerAuth = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    pancard: "",
  });

  const HandleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const PageDirect = () => {
    const { name, email, phone, pancard } = form;
    if (name === "" || email === "" || phone === "" || pancard === "") {
      alert("Please fill all fields");
    } else {
      navigate("/log");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center h-screen items-center bg-gradient-to-b from-black to-nor">
        <div className="bg-gradient-to-b from-nor2 to-nor p-10 w-96 sm:w-full sm:m-6 lg:w-1/2 rounded-lg">
          <div className="mb-10 flex justify-between items-center">
            <h1 className="text-gray-200 font-extrabold text-md sm:text-sm md:text-md lg:text-xl flex gap-2 text-center">
              Farmer <span className="hidden sm:flex">Authentication</span>{" "}
              <span className="flex lg:hidden xl:hidden">Auth</span>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="w-8 h-8 text-gray-600 hover:scale-110 cursor-pointer"
              onClick={PageDirect}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5-5 5M6 7l5 5-5 5"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={HandleForm}
              className="inputBox"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={HandleForm}
              className="inputBox"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={HandleForm}
              className="inputBox"
            />
            <input
              type="text"
              name="pancard"
              placeholder="PAN Card Number"
              value={form.pancard}
              onChange={HandleForm}
              className="inputBox"
            />
            <input type="file" id="fileInput" className="hidden" />
            <label
              htmlFor="fileInput"
              className="cursor-pointer border-2 border-dashed border-gray-600 p-6 rounded-md flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span className="mt-2 text-gray-500 flex">Upload Image</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerAuth;
