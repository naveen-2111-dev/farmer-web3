import React, { useEffect, useState } from "react";
import { UseContractProvider } from "../../../context/Context";

const MyProd = () => {
  const { GetMyProducts } = UseContractProvider();
  const [Myproducts, setMyproducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ProductsAddedByMe = async () => {
      try {
        const MyProduct = await GetMyProducts();
        console.log(MyProduct);
        if (MyProduct) {
          setMyproducts(MyProduct);
        }
      } catch (err) {
        console.log("error in getting my products !", err);
      } finally {
        setLoading(false);
      }
    };
    ProductsAddedByMe();
  }, [GetMyProducts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-500 text-lg font-semibold">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="products">
      <div className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center ">
          {Myproducts.map((prod) => (
            <div
              key={prod.productId}
              id={prod.productId}
              className="w-full max-w-xs"
            >
              <div className="bg-gradient-to-b from-nor2 to-nor rounded-lg flex flex-col items-center p-2  w-44">
                <img
                  src={prod.image}
                  alt="image not found"
                  className="w-full h-44 mb-4"
                />
                <h1 className="text-xl font-bold mb-2 text-center">
                  {prod.title}
                </h1>
                <p className="mb-4 text-center">{prod.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProd;
