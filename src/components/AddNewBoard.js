import React from "react";
import Button from "./Button";
import Cross from "../assets/icon-cross.svg";

const AddNewBoard = () => {
  return (
    <div className="text-mediumGray tracking-wide">
      <h1 className="text-xl text-black">Add New Board</h1>
      <div className="flex flex-col my-3">
        <label htmlFor="name" className="text-xs font-bold">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="e.g. Web Design"
          className="text-sm border border-1 border-linesLight p-2 rounded-md my-1"
        />
      </div>
      <div>
        <label htmlFor="columns" className="text-xs font-bold">
          Columns
        </label>
        <div className="flex justify-between items-center">
          <input
            type="text"
            id="columns"
            placeholder="Todo"
            className="text-black flex-1 text-sm border border-1 border-linesLight p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none"
          />
          <img src={Cross} alt="cancel" className="ml-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col">
        <Button text="+Add New Column" className="" />
      </div>
      <div className="flex flex-col">
        <Button text="Create New Board" />
      </div>
    </div>
  );
};

export default AddNewBoard;
