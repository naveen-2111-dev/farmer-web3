import React from "react";
import { NavbarComponent, SideBar } from "../../components";
import AddProd from "./utils/AddProd";
import { UseContractProvider } from "../../context/Context";
import MyProd from "./utils/MyProd";

const FarmerConsole = () => {
  const { SideBarState, Side } = UseContractProvider();

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarComponent />
      <div className="flex flex-1">
        <div className="w-1/4 sticky top-0 h-screen">
          <SideBar />
        </div>
        <div className="flex-1 p-4 overflow-auto">
          {SideBarState && <AddProd />}
          {!SideBarState && Side && <MyProd />}
        </div>
      </div>
    </div>
  );
};

export default FarmerConsole;
