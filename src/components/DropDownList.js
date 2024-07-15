import React from "react";
import { useSelector } from "react-redux";

const DropDownList = () => {
  const dropDownList = ["Edit Task", "Delete Task"];
  const darkMode = useSelector((state) => state.app.darkMode);
  return (
    <div className={`${darkMode ? "bg-linesDark" : "bg-white"}`}>
      {dropDownList.map((list) => (
        <p>{list}</p>
      ))}
    </div>
  );
};

export default DropDownList;
