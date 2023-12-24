import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import SideBarIcon from "./SideBarIcon";

const Body = () => {
  const darkMode = useSelector((state) => state.app.darkMode);
  const sideBar = useSelector((state) => state.app.sideBar);
  return (
    <>
      <div
        className={`bg-${
          darkMode ? "dark" : "light"
        }-bg h-[88vh] flex flex-col justify-center items-center  ${
          sideBar ? "pl-72" : "pl-0"
        }`}
      >
        <h1 className="text-lg text-medium-gray pl-5">
          This board is empty. Create a new column to get started.
        </h1>
        <Button text="+ Add New Column" />
      </div>
      {!sideBar && (
        <div className="relative">
          <SideBarIcon />
        </div>
      )}
    </>
  );
};

export default Body;
