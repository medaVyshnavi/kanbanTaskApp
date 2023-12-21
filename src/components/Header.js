import React from "react";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white pl-80 h-24 border-lines-light border-b-[1px]">
      <h1 className="text-xl text-black">Platform Launch</h1>
      <div className="flex justify-between items-center pr-10">
        <Button text="+ Add Task Button" />
        <img src={ellipsis} alt="ellipse" className="ml-6" />
      </div>
    </div>
  );
};

export default Header;
