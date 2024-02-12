import React from "react";
import Button from "./Button";

const DeletePopup = ({ title, description, onCancel, deleteHandler }) => {
  return (
    <div>
      <h1 className="text-red text-lg">{title}</h1>
      <p className="text-mediumGray text-sm mt-6">{description}</p>
      <div className="flex justify-between">
        <Button
          text="Delete"
          className={"bg-red text-white px-[75px]"}
          click={deleteHandler}
        />
        <Button
          text="Cancel"
          className={"bg-light text-purple px-[75px]"}
          click={onCancel}
        />
      </div>
    </div>
  );
};

export default DeletePopup;
