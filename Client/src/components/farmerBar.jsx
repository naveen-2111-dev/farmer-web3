import React from "react";
import Logo from "../assets/logo.png";
import MetaMask from "../assets/meta.png";
import { UseContractProvider } from "../context/Context";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const [active, setActive] = React.useState("All");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { Connect } = UseContractProvider();
  const navigate = useNavigate();

  const HandleActive = (actState) => {
    setActive(actState);

    switch (actState) {
      case "All":
        navigate("/");
        break;

      case "add":
        navigate("/addprod");
        break;

      default:
        break;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white flex justify-between items-center p-4 relative box">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src={Logo} className="h-12" alt="Logo" />
        <div className="ml-3">
          <h1 className="font-black text-xl">Farmer</h1>
          <p className="font-extralight text-xs">sell by yourself</p>
        </div>
      </div>

      {/* Buttons for Large Screens */}
      <div>
        <button
          className="buttonclass group flex items-center gap-2 bg-bg p-3 text-xs rounded-lg font-bold"
          onClick={Connect}
        >
          <span className="hidden group-hover:block lg:block">Connect</span>
          <img src={MetaMask} className="h-5" alt="MetaMask" />
        </button>
      </div>
    </div>
  );
};

export default NavbarComponent;
