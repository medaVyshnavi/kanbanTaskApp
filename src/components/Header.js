import React from "react";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";
import Button from "./Button";
import { useSelector } from "react-redux";

const Header = () => {
  const darkMode = useSelector((state) => state.app.darkMode);
  return (
    <div
      className={`flex justify-between items-center bg-${
        darkMode ? "dark-gray" : "white"
      } pl-80 h-24 border-lines-${darkMode ? "dark" : "light"} border-b-[1px]`}
    >
      <h1 className={`text-xl text-${darkMode ? "white" : "black"}`}>
        Platform Launch
      </h1>
      <div className="flex justify-between items-center pr-10">
        <Button text="+ Add Task Button" />
        <img src={ellipsis} alt="ellipse" className="ml-6" />
      </div>
    </div>
  );
};

export default Header;
