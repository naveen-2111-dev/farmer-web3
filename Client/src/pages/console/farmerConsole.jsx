import React, { useState } from "react";
import { NavbarComponent, SideBar } from "../../components";
import { UseContractProvider } from "../../context/Context";
import { parseEther } from "ethers";

const FarmerConsole = () => {
  const [form, setForm] = useState({
    image: "",
    Stock: 0,
    desc: "",
    title: "",
    price: 0,
    type: "",
  });
  const { AddProductss, AllProducts, BuyerOfProduct } = UseContractProvider();

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

  const HandleGetall = async() => { //need to decode it
    try {
      const data = await AllProducts();
      // const mainData = Reflect.get(data, 'target');
      // const jsonData = JSON.parse(mainData);
      console.log(data);
    } catch (err) {
      console.log("error from frmerconsole line 46",err)
    }
  }

  const BuyerofProd = async () => { //need to check why the payment reverts
    const totalPrice = 1
    // const price = parseEther(totalPrice);
    try {
      await BuyerOfProduct(2, 1, { value: totalPrice });
      console.log("success from 55 frmerconsole")
    } catch (error) {
      console.log("error in buying product line 56 from frmerconsole",error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarComponent />
      <div className="flex flex-1">
        <SideBar />
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
            <button
              onClick={HandleGetall}
              className="p-3 bg-blue-400 rounded-lg capitalize text-white"
            >
              get
            </button>
            <button
              onClick={BuyerofProd}
              className="p-3 bg-blue-400 rounded-lg capitalize text-white"
            >
              buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerConsole;
