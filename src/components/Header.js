import React from "react";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";

const Header = () => {
  return (
    <div className="flex justify-around items-center mt-4">
      <h1 className="text-xl text-black">Platform Launch</h1>
      <div className="flex justify-between items-center">
        <button className="bg-purple text-white rounded-3xl text-base px-4 py-3">
          + Add Task Button
        </button>
        <img src={ellipsis} alt="ellipse" className="ml-10" />
      </div>
    </div>
  );
};

export default Header;
