import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const Body = () => {
  const darkMode = useSelector((state) => state.app.darkMode);
  return (
    <div
      className={`bg-${
        darkMode ? "dark" : "light"
      }-bg h-[88vh] flex flex-col justify-center items-center pl-72`}
    >
      <h1 className="text-lg text-medium-gray pl-5">
        This board is empty. Create a new column to get started.
      </h1>
      <Button text="+ Add New Column" />
    </div>
  );
};

export default Body;
