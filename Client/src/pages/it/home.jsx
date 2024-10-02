import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Navbar from "../../components/Navbar";
import Meta from "../../assets/image.png";
import Metamask from "../../assets/meta.png";
import Farm from "../../assets/cont.png";
import { UseContractProvider } from "../../context/Context";

const Home = () => {
  const { AllProducts, BuyerOfProduct, Connect } = UseContractProvider();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [kg, setKg] = useState(1);
  console.log(products);

  const HandleChange = (e) => {
    const values = e.target.value;
    setKg(values);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await AllProducts();
        setProducts(productData);
      } catch (error) {
        setError("Error fetching products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [AllProducts]);

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

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const formatPrice = (price) => {
    if (!price) return "0";
    const priceInEther = ethers.formatEther(price);
    return priceInEther.toString();
  };

  return (
    <div className="text-gray-400">
      <Navbar />
      <div className="p-10">
        {products ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            {products.map((prod) => {
              const formattedPrice = formatPrice(prod.price);

              return (
                <div key={prod.productId} id={prod.productId}>
                  <div className="bg-gradient-to-b from-nor2 to-nor rounded-lg flex flex-col items-center p-6 w-64">
                    <img
                      src={prod.image || Meta}
                      alt="image not found"
                      className="w-full h-auto mb-4"
                    />
                    <h1 className="text-xl font-bold mb-2">{prod.title}</h1>
                    <p className="mb-4 text-center">{prod.description}</p>
                    <div className="flex items-center justify-between w-full mb-4">
                      <button
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                        onClick={async () => {
                          try {
                            const formattedPrice = formatPrice(prod.price);
                            console.log(
                              "Formatted price for conversion:",
                              formattedPrice
                            );

                            const totalPriceInEther = (
                              parseFloat(formattedPrice) * kg
                            ).toString(); 
                            const priceInWei =
                              ethers.parseEther(totalPriceInEther);

                            await BuyerOfProduct(
                              prod.productId,
                              kg,
                              priceInWei
                            );
                          } catch (err) {
                            console.error("Error purchasing product:", err);
                            alert(
                              "An error occurred while trying to buy the product."
                            );
                          }
                        }}
                      >
                        Buy
                      </button>

                      <input
                        type="text"
                        className="appearance-none border-2 border-blue-500 p-2 w-20 ml-4 inputBoxs"
                        placeholder="kg"
                        onChange={HandleChange}
                      />
                    </div>
                    <span className="text-lg font-semibold">
                      {formattedPrice} FTM
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-screen bg-transparent">
            <div className="text-center p-4 bg-transparent shadow-lg rounded-lg">
              <img
                src={Farm}
                alt="Farm"
                className="mx-auto bg-transparent mb-20"
              />
              <h1 className="text-xl lg:text-2xl font-semibold mb-4 w-40 sm:w-40 lg:w-96 md:w-60">
                {" "}
                a direct sales application for farmers
              </h1>
              <h1 className="text-xl lg:text-2xl font-semibold mb-4 w-40 sm:w-40 lg:w-96 md:w-60">
                Please connect to your MetaMask wallet to continue further for
                obtaining testnets
                <a
                  href="https://faucet.fantom.network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Fantom faucet
                </a>
              </h1>
              <div className="flex items-center justify-center">
                <button
                  className="flex px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                  onClick={Connect}
                >
                  Connect{" "}
                  <img src={Metamask} alt="MetaMask" className="ml-2 w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
