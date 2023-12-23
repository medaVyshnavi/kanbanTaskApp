import React from "react";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";
import Button from "./Button";
import { useSelector } from "react-redux";
import darkLogo from "../assets/logo-dark.svg";
import lightLogo from "../assets/logo-light.svg";

const Header = () => {
  const darkMode = useSelector((state) => state.app.darkMode);
  const sideBar = useSelector((state) => state.app.sideBar);
  return (
    <div className="flex justify-start items-center">
      {!sideBar && (
        <img
          src={darkMode ? lightLogo : darkLogo}
          alt="logo"
          className="pl-10"
        />
      )}
      <div
        className={`flex justify-between items-center bg-${
          darkMode ? "dark-gray" : "white"
        } ${sideBar ? "pl-80 " : "pl-10"} h-24 border-lines-${
          darkMode ? "dark" : "light"
        } border-b-[1px]`}
      >
        {" "}
        <h1 className={`text-xl text-${darkMode ? "white" : "black"}`}>
          Platform Launch
        </h1>
        <div className="flex justify-between items-center pr-10">
          <Button text="+ Add Task Button" />
          <img src={ellipsis} alt="ellipse" className="ml-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
