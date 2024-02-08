import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const DeletePopup = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-red text-lg">{title}</h1>
      <p className="text-mediumGray text-sm">{description}</p>
      <div className="flex">
        <Button text="Delete" className={"bg-red text-white"} />
        <Button text="Cancel" className={"bg-light text-purple"} />
      </div>
    </div>
  );
};

export default DeletePopup;
