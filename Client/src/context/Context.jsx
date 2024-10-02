import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers, getAddress, parseEther, toNumber } from "ethers";
import Abi from "../Json/contract.json"; // Abi imported here
import CryptoJS from "crypto-js";

const ContraContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(true);
  const [pop, setPop] = useState(true);
  const [SideBarState, setSideBarState] = useState(false);
  const [Side, setSide] = useState(false);
  const [contract, setContract] = useState("");
  const [Address, setAddress] = useState("");
  const [provider, setProvider] = useState("");
  const [signer, setSigner] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const contractAddress = "0xe83aaf495e3e764e748c8d863a920db068821fe5";
  const SECRET_KEY =
    "6b86d8ec0028179ad97a5fb46b13457731a7c8d0ff1c40e83b9d0df43250e233";

  useEffect(() => {
    if (!window.ethereum) {
      setIsMetamaskInstalled(false);
    }

    const iconTimer = setTimeout(() => {
      setPop(false);
    }, 10000);

    return () => clearTimeout(iconTimer);
  }, []);

  // Encrypt and Decrypt functions
  const Encrypt = (textToEncrypt) =>
    CryptoJS.AES.encrypt(textToEncrypt, SECRET_KEY).toString();
  const Decrypt = (textToDecrypt) =>
    CryptoJS.AES.decrypt(textToDecrypt, SECRET_KEY).toString(CryptoJS.enc.Utf8);

  // Store values in localStorage
  const storeValuesInLocalStorage = () => {
    if (isConnected) {
      window.localStorage.setItem("Connected", "true");
    }
  };

  // Connect function
  const Connect = async () => {
    try {
      const isMobile = /iPhone|iPad|ipod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        try {
          window.location.href = "metamask://";
          setTimeout(() => {
            window.location.href = "https://metamask.io/download.html";
          }, 3000);
        } catch (err) {
          console.log("Error in opening MetaMask", err);
        }
      } else {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signers = await provider.getSigner();
        const AddressOfSigner = await signers.getAddress();
        setIsConnected(true);
        setSigner(signers);
        setAddress(AddressOfSigner);
        setProvider(provider);

        storeValuesInLocalStorage();
      }
    } catch (err) {
      console.error("Error connecting to MetaMask", err);
    }
  };

  useEffect(() => {
    if (signer) {
      const contractInstance = new ethers.Contract(
        contractAddress,
        Abi.abi, // Using Abi.abi for the contract ABI
        signer
      );
      setContract(contractInstance);
      console.log(contractInstance);
    }
  }, [signer]);

  // Add Products
  const AddProductss = async (_image, _desc, _stock, _title, _price, _typeof) => {
    try {
      if (!contract) {
        console.log("contract not initialized");
        return;
      }

      const tx = await contract.AddProduct(
        _image,
        _desc,
        _stock,
        _title,
        parseEther(_price),
        _typeof
      );
      await tx.wait();
      console.log("product added successfully");
    } catch (err) {
      console.log("error in adding prod context line 140", err);
    }
  };

  // Get Products
  const AllProducts = async () => {
    try {
      if (contract) {
        const Products = await contract.GetAllProducts();
        console.log("Raw Products:", Products);

        const productData = Products.map((productProxy, i) => ({
          description: productProxy.Description,
          stock: productProxy.Stock,
          title: productProxy.Title,
          price: productProxy.Price.toString(),
          address: productProxy.Farmer,
          ProductType: productProxy.TypeOfProduct,
          stockleft: productProxy.StockLeft,
          image: productProxy.Image,
          productId: productProxy.id || i,
        }));

        return productData;
      } else {
        console.log("Contract not initialized from Allprod line 134");
      }
    } catch (err) {
      console.log("Error in getting products context line 135", err);
    }
  };

  const BuyerOfProduct = async (_idOfProduct, _kilogram, price) => {
    try{
      
    }catch(err){
      console.log(err)
    }
  };
  
  const GetMyProducts = async () => {
    try {
      const AllProductsInBlock = await AllProducts();
      const myProducts = AllProductsInBlock.filter(
        (allprod) => allprod.address === Address
      );

      return myProducts;
    } catch (err) {
      console.log("error in getting products error from context", err);
    }
  };

  const values = {
    Connect,
    isConnected,
    AddProductss,
    AllProducts,
    BuyerOfProduct,
    SideBarState,
    setSideBarState,
    Side,
    setSide,
    GetMyProducts,
  };

  return (
    <ContraContext.Provider value={values}>
      {!isMetamaskInstalled && (
        <div
          className={
            pop
              ? "flex justify-end rounded-lg absolute z-50 mt-24 m-4 bg-bg p-4 capitalize text-white font-bold cursor-pointer"
              : "hidden"
          }
        >
          <h1 className="flex items-center">
            MetaMask not installed
            <span className="ml-2">🦊</span>
          </h1>
        </div>
      )}
      {children}
    </ContraContext.Provider>
  );
};

export const UseContractProvider = () => {
  const context = useContext(ContraContext);
  if (!context) {
    throw new Error("Context not found");
  }
  return context;
};
