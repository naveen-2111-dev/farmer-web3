import React, { useState } from "react";
import { parseEther } from "ethers";
import { UseContractProvider } from "../../../context/Context";

const AddProd = () => {
  const [form, setForm] = useState({
    image: "",
    Stock: 0,
    desc: "",
    title: "",
    price: 0,
    type: "",
  });
  const { AddProductss } = UseContractProvider();

  const HandleInput = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const HandleClick = async () => {
    try {
      await AddProductss(
        form.image,
        form.desc,
        form.Stock,
        form.title,
        form.price,
        form.type
      );
      console.log("Added successfully");
    } catch (err) {
      console.log("Error in FarmerConsole line 32", err);
    }
  };
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col gap-3 p-4 bg-gray-800 shadow-lg rounded-lg max-w-md w-full">
        <input
          className="p-2 border-none outline-none text-white bg-gray-900 rounded"
          type="text"
          name="image"
          placeholder="Image"
          value={form.image}
          onChange={HandleInput}
        />
        <input
          className="p-2 border-none outline-none text-white bg-gray-900 rounded"
          type="number"
          name="Stock"
          placeholder="Stock"
          value={form.Stock}
          onChange={HandleInput}
        />
        <input
          className="p-2 border-none outline-none text-white bg-gray-900 rounded"
          type="text"
          name="desc"
          placeholder="Description"
          value={form.desc}
          onChange={HandleInput}
        />
        <input
          className="p-2 border-none outline-none text-white bg-gray-900 rounded"
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={HandleInput}
        />
        <input
          className="p-2 border-none outline-none text-white bg-gray-900 rounded"
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={HandleInput}
        />
        <input
          className="p-2 border-none outline-none text-white bg-gray-900 rounded"
          type="text"
          name="type"
          placeholder="Type"
          value={form.type}
          onChange={HandleInput}
        />
        <button
          onClick={HandleClick}
          className="p-3 bg-blue-400 rounded-lg capitalize text-white"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddProd;
