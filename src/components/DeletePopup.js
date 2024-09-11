import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

const DeletePopup = ({ title, description, onCancel, deleteHandler }) => {
  const darkMode = useSelector((state) => state.app.darkMode);
  return (
    <div>
      <h1 className="text-red text-lg">{title}</h1>
      <p className="text-mediumGray text-sm mt-6">{description}</p>
      <div className="flex justify-between">
        <Button
          text="Delete"
          className={
            "bg-red text-white px-12 sm:px-[50px] md:px-[75px] hover:bg-redHover"
          }
          click={deleteHandler}
        />
        <Button
          text="Cancel"
          className={`bg-light text-purple px-12 sm:px-[50px] md:px-[75px] ${
            darkMode
              ? "hover:bg-white hover:text-purpleHover"
              : "hover:bg-purpleHover hover:text-black"
          }`}
          click={onCancel}
        />
      </div>
    </div>
  );
};

export default DeletePopup;
